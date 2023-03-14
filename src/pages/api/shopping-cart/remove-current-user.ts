import { NextApiResponse } from "next";
import { Response } from "types/types";
import { CustomRequest, CartItemInterface } from "types/interfaces";
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
    const { variantId, quantity } = req.body;

    if (!variantId || !quantity) {
      throw new Error(
        "Please provide all the required fields: variantId, quantity"
      );
    }

    const productExist = await Product.findOne({
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

    // Find the item in the cart array with the matching variantId
    const itemIndex = cart.findIndex(
      (item: CartItemInterface) =>
        item.variantId.toString() === variantId.toString()
    );

    if (itemIndex !== -1) {
      // If the item exists, update the quantity property
      cart[itemIndex].quantity -= quantity;

      // If the quantity reaches zero or less, remove the item from the cart array
      if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1);
      }
    }

    await User.findByIdAndUpdate(
      req.userId,
      {
        $set: {
          cart,
        },
      },
      { new: true, upsert: true, strict: false }
    );

    res.status(200).json({
      message: "Product has been removed from cart",
    });
  }
);

export default handler;
