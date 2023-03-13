import { NextApiResponse } from "next";
import { Product } from "models/product";
import { Response } from "types/types";
import { CustomRequest, ProductInterface } from "types/interfaces";
import { connectHandler } from "utils";

const handler = connectHandler(
  {
    method: "GET",
    isProtected: true,
  },
  async (
    _: CustomRequest,
    res: NextApiResponse<Response<ProductInterface[]>>
  ) => {
    const product = await Product.find({});

    res.status(200).json({
      message: `${product.length} products have been found`,
      data: product,
    });
  }
);

export default handler;
