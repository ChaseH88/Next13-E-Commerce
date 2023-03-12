import { NextApiResponse } from "next";
import { User } from "models/user";
import { CustomRequest, UserInterface } from "types/interfaces";
import { Response } from "types/types";
import { connectHandler } from "utils";

const handler = connectHandler(
  {
    method: "GET",
    isProtected: true,
  },
  async (req: CustomRequest, res: NextApiResponse<Response<UserInterface>>) => {
    const user = await User.findById(req.userId).select("-password");

    return res
      .status(200)
      .json({ message: "User has been found.", data: user });
  }
);

export default handler;
