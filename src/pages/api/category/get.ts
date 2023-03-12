import { NextApiResponse } from "next";
import { Category } from "models/category";
import { Response } from "types/types";
import { CustomRequest, CategoryInterface } from "types/interfaces";
import { connectHandler } from "utils";

const handler = connectHandler(
  {
    method: "GET",
    isProtected: true,
  },
  async (
    req: CustomRequest,
    res: NextApiResponse<Response<CategoryInterface[]>>
  ) => {
    const category = await Category.find({});

    res.status(200).json({
      message: `${category.length} categories have been found`,
      data: category,
    });
  }
);

export default handler;
