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
    req: CustomRequest,
    res: NextApiResponse<Response<ProductInterface[]>>
  ) => {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;
    const count = await Product.countDocuments({});

    const product = await Product.find({})
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.status(200).json({
      message: `${product.length} products have been found`,
      data: product,
      pagination: {
        page,
        pageSize,
        totalPages: Math.ceil(count / pageSize),
        totalItems: count,
      },
    });
  }
);

export default handler;
