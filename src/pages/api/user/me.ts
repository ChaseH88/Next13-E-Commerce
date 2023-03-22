import { NextApiResponse } from "next";
import { User } from "models/user";
import { Product } from "models/product";
import {
  CartItemInterface,
  CustomRequest,
  ProductInterface,
  UserInterface,
} from "types/interfaces";
import { Response } from "types/types";
import { connectHandler } from "utils";

const handler = connectHandler(
  {
    method: "GET",
    isProtected: true,
  },
  async (req: CustomRequest, res: NextApiResponse<Response<UserInterface>>) => {
    const user = (await User.findById(req.userId)
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

    const cart = user?.cart?.map(({ productId, variantId, quantity }) => {
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
    }) as unknown as CartItemInterface[];

    const formattedUser: UserInterface = {
      ...(user as any)._doc,
      cart,
    };

    return res
      .status(200)
      .json({ message: "User has been found.", data: formattedUser });
  }
);

export default handler;
