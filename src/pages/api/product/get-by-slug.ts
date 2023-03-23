import { NextApiResponse } from "next";
import { Product } from "models/product";
import { Response } from "types/types";
import { CustomRequest, ProductInterface } from "types/interfaces";
import { connectHandler } from "utils";

const handler = connectHandler(
  {
    method: "GET",
    isProtected: false,
  },
  async (
    req: CustomRequest,
    res: NextApiResponse<Response<ProductInterface>>
  ) => {
    const { slug } = req.query;

    if (!slug) {
      throw new Error("Please provide a product slug");
    }

    // needs to be case insensitive
    const product = await Product.findOne({
      slug: new RegExp(slug.toString(), "i"),
    });

    if (!product) {
      throw new Error("Product does not exist");
    }

    res.status(200).json({
      message: "Product has been found",
      data: product,
    });
  }
);

export default handler;
