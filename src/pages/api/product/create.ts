import { NextApiResponse } from "next";
import { Product } from "models/product";
import { Response } from "types/types";
import { ProductInterface, CustomRequest } from "types/interfaces";
import { connectHandler } from "utils";
import { slugify } from "utils/slugify";
import { Category } from "models/category";

const handler = connectHandler(
  {
    method: "POST",
    isProtected: true,
  },
  async (
    req: CustomRequest,
    res: NextApiResponse<Response<ProductInterface>>
  ) => {
    const slug = slugify(req.body.name);

    const existingProduct = await Product.findOne({ slug });

    if (existingProduct) {
      throw new Error("Product already exists");
    }

    const category = await Category.findById(req.body.categoryId);

    if (!category) {
      throw new Error("Category does not exist");
    }

    const product = new Product({
      ...req.body,
      slug,
      createdById: req.userId,
    });

    await product.save();

    res.status(200).json({
      message: "Product created",
      data: product,
    });
  }
);

export default handler;
