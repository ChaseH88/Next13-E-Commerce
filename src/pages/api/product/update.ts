import { NextApiResponse } from "next";
import { Product } from "models/product";
import { Response } from "types/types";
import { ProductInterface, CustomRequest } from "types/interfaces";
import { connectHandler } from "utils";
import { slugify } from "utils/slugify";

const handler = connectHandler(
  {
    method: "PUT",
    isProtected: true,
  },
  async (
    req: CustomRequest,
    res: NextApiResponse<Response<ProductInterface>>
  ) => {
    let slug: undefined | string;

    if (req.body?.name) {
      slug = slugify(req.body.name);
    }

    const product = await Product.findByIdAndUpdate(
      req.body.id,
      {
        ...req.body,
        slug,
      },
      { new: true }
    );

    res.status(200).json({
      message: "Product has been updated",
      data: product,
    });
  }
);

export default handler;
