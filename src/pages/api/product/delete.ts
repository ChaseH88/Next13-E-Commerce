import { NextApiResponse } from "next";
import { Product } from "models/product";
import { Response } from "types/types";
import { CustomRequest, ProductInterface } from "types/interfaces";
import { connectHandler } from "utils";

const handler = connectHandler(
  {
    method: "DELETE",
    isProtected: true,
  },
  async (req: CustomRequest, res: NextApiResponse<Response<null>>) => {
    const { id } = req.body;

    if (!id) {
      throw new Error("Please provide an id");
    }

    const product = await Product.findById(id);

    if (!product) {
      throw new Error("Product does not exist");
    }

    await Product.findByIdAndDelete(id);

    res.status(200).json({
      message: "Product has been deleted",
      data: null,
    });
  }
);

export default handler;
