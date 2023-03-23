import { NextApiResponse } from "next";
import { Product } from "models/product";
import { Response } from "types/types";
import {
  CustomRequest,
  CartItemInterface,
  VariantInterface,
} from "types/interfaces";
import { connectHandler } from "utils";
import { User } from "models/user";

const handler = connectHandler(
  {
    method: "GET",
    isProtected: true,
  },
  async (
    req: CustomRequest,
    res: NextApiResponse<Response<CartItemInterface[]>>
  ) => {
    const user = await User.findById(req.userId);
    const formatted = JSON.parse(JSON.stringify(user));
    const cart = formatted?.cart || [];

    if (cart.length) {
      const updatedCart = await Promise.all(
        cart.map(async (item: CartItemInterface) => {
          const product = await Product.findById(item.productId);

          if (!product) {
            return null;
          }

          const variant = product?.variants.find(
            (variant: VariantInterface) =>
              variant!.id!.toString() === item.variantId.toString()
          );
          return {
            ...item,
            productId: product,
            variantId: variant,
          };
        })
      );

      const filteredCart = updatedCart.filter((item) => item !== null);

      res.status(200).json({
        message: filteredCart?.length
          ? `${filteredCart.length} items have been found`
          : "Cart is empty",
        data: filteredCart,
      });
    } else {
      res.status(200).json({
        message: "Cart is empty",
        data: [],
      });
    }
  }
);

export default handler;
