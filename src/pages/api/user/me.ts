import { NextApiRequest, NextApiResponse } from "next";
import { User } from "models/user";
import { UserInterface } from "types/interfaces";
import { Response } from "types/types";
import { connectHandler } from "utils";

const handler = connectHandler(
  {
    method: "GET",
    isProtected: true,
  },
  async (
    req: NextApiRequest,
    res: NextApiResponse<Response<UserInterface>>
  ) => {
    const user = await User.findById((req as any).userId).select("-password");

    return res.status(200).json({ message: "Login successful", data: user });
  }
);

export default handler;
