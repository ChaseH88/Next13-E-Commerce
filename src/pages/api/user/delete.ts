import { NextApiRequest, NextApiResponse } from "next";
import { User } from "models/user";
import { Response } from "types/types";
import { connectHandler } from "utils";

const handler = connectHandler(
  {
    method: "DELETE",
    isProtected: true,
  },
  async (req: NextApiRequest, res: NextApiResponse<Response<null>>) => {
    const { id } = req.body;

    if (!id) {
      throw new Error("Please provide a user id");
    }

    const user = await User.findByIdAndDelete(id).select("-password");

    // TODO: we'll need to clean up & delete all of the other data associated with this user

    if (!user) {
      throw new Error("User not found");
    }

    return res.status(200).json({
      message: `${user.email} has been deleted`,
      data: null,
    });
  }
);

export default handler;
