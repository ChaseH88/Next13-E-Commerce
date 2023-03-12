import { NextApiResponse } from "next";
import { Category } from "models/category";
import { Response } from "types/types";
import { CategoryInterface, CustomRequest } from "types/interfaces";
import { connectHandler } from "utils";
import { slugify } from "utils/slugify";

const handler = connectHandler(
  {
    method: "POST",
    isProtected: true,
  },
  async (
    req: CustomRequest,
    res: NextApiResponse<Response<CategoryInterface>>
  ) => {
    const { name, description } = req.body;

    if (!name || !description) {
      throw new Error("Please provide a name and description");
    }

    const slug = slugify(name);

    const existingCategory = await Category.findOne({ slug });

    if (existingCategory) {
      throw new Error("Category already exists");
    }

    const category = new Category({
      name,
      description,
      slug,
      createdById: req.userId,
    });

    await category.save();

    res.status(200).json({
      message: "Category created",
      data: category,
    });
  }
);

export default handler;
