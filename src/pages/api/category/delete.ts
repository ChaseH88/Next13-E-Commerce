import { NextApiResponse } from "next";
import { Category } from "models/category";
import { Response } from "types/types";
import { CustomRequest } from "types/interfaces";
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

    const category = await Category.findById(id);

    if (!category) {
      throw new Error("Category does not exist");
    }

    await Category.findByIdAndDelete(id);

    res.status(200).json({
      message: "Category has been deleted",
      data: null,
    });
  }
);

export default handler;
