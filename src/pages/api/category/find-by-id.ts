import { NextApiResponse } from "next";
import { Category } from "models/category";
import { Response } from "types/types";
import { CustomRequest, CategoryInterface } from "types/interfaces";
import { connectHandler } from "utils";

const handler = connectHandler(
  {
    method: "POST",
    isProtected: true,
  },
  async (
    req: CustomRequest,
    res: NextApiResponse<Response<CategoryInterface>>
  ) => {
    const { id } = req.body;

    if (!id) {
      throw new Error("Please provide an id");
    }

    const category = await Category.findById(id);

    res.status(200).json({
      message: "Category has been found",
      data: category,
    });
  }
);

export default handler;
