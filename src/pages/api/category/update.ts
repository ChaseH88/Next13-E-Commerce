import { NextApiResponse } from "next";
import { Category } from "models/category";
import { Response } from "types/types";
import { CategoryInterface, CustomRequest } from "types/interfaces";
import { connectHandler } from "utils";
import { slugify } from "utils/slugify";

const handler = connectHandler(
  {
    method: "PUT",
    isProtected: true,
  },
  async (
    req: CustomRequest,
    res: NextApiResponse<Response<CategoryInterface>>
  ) => {
    const { id, name, description } = req.body;
    let slug: undefined | string;

    if (name) {
      slug = slugify(name);
    }

    const category = await Category.findByIdAndUpdate(
      id,
      {
        name,
        description,
        slug,
      },
      { new: true }
    );

    res.status(200).json({
      message: "Category has been updated",
      data: category,
    });
  }
);

export default handler;
