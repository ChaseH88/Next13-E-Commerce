import { NextApiResponse } from "next";
import { Product } from "models/product";
import { Response } from "types/types";
import { CustomRequest, ProductInterface } from "types/interfaces";
import { connectHandler } from "utils";

const handler = connectHandler(
  {
    method: "POST",
    isProtected: true,
  },
  async (
    req: CustomRequest,
    res: NextApiResponse<Response<ProductInterface>>
  ) => {
    const { id } = req.body;

    if (!id) {
      throw new Error("Please provide an id");
    }

    const product = await Product.findById(id);

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
