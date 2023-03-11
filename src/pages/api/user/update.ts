import { NextApiRequest, NextApiResponse } from "next";
import { User } from "models/user";
import { UserInterface } from "types/interfaces";
import { Response } from "types/types";
import { connectHandler, hashPassword } from "utils";

const handler = connectHandler(
  {
    method: "PUT",
    isProtected: true,
  },
  async (
    req: NextApiRequest,
    res: NextApiResponse<Response<UserInterface>>
  ) => {
    const { id, ...body } = req.body;

    if (!id) {
      throw new Error("Please provide a user id");
    }

    if (body.password) {
      body.password = await hashPassword(body.password);
    }

    // cannot update your email right now
    delete body.email;

    const user = await User.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!user) {
      throw new Error("User not found");
    }

    return res.status(200).json({
      message: "User updated",
      data: user,
    });
  }
);

export default handler;
