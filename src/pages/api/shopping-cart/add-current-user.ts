import { NextApiResponse } from "next";
import { Response } from "types/types";
import {
  CustomRequest,
  CartItemInterface,
  ProductInterface,
  UserInterface,
} from "types/interfaces";
import { connectHandler } from "utils";
import { User } from "models/user";
import { Product } from "models/product";

const handler = connectHandler(
  {
    method: "PUT",
    isProtected: true,
  },
  async (
    req: CustomRequest,
    res: NextApiResponse<Response<CartItemInterface[]>>
  ) => {
    const { productId, variantId, quantity } = req.body;

    if (!productId || !variantId || !quantity) {
      throw new Error(
        "Please provide all the required fields: productId, variantId, quantity"
      );
    }

    const productExist = await Product.findOne({
      _id: productId,
      variants: {
        $elemMatch: {
          _id: variantId,
        },
      },
    });

    if (!productExist) {
      throw new Error("Product does not exist");
    }

    const user = await User.findById(req.userId);
    const formatted = JSON.parse(JSON.stringify(user));
    const cart: CartItemInterface[] = formatted?.cart || [];
    let exist = false;

    // Find the item in the cart array with the matching productId
    const itemIndex = cart.findIndex(
      (item: CartItemInterface) =>
        item.productId.toString() === productId.toString()
    );

    if (itemIndex !== -1) {
      // If the item exists, update the quantity property
      cart[itemIndex].quantity += quantity;
      exist = true;
    }

    if (!exist) {
      // If the item does not exist, add a new item to the cart array
      cart.push({
        productId,
        variantId,
        quantity,
      });
    }

    const updated = (await User.findByIdAndUpdate(
      req.userId,
      {
        $set: {
          cart,
        },
      },
      { new: true, upsert: true, strict: false }
    )
      .select("-password")
      .populate({
        path: "cart",
        populate: [
          {
            path: "productId",
            model: Product,
          },
        ],
      })) as UserInterface;

    const formattedCart = updated?.cart?.map(
      ({ productId, variantId, quantity }) => {
        const variantDoc = (
          productId as unknown as ProductInterface
        ).variants.find(
          (variant) => variant._id?.toString() === variantId.toString()
        );
        return {
          productId,
          variantId: variantDoc,
          quantity,
        };
      }
    ) as unknown as CartItemInterface[];

    res.status(200).json({
      message: "Product added to cart",
      data: formattedCart,
    });
  }
);

export default handler;
