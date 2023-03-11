import { NextApiRequest, NextApiResponse } from "next";
import { User, UserInterface } from "../../../models/user";
import { Response } from "../../../types/types";
import { connectHandler } from "../../../utils/connect-handler";
import { hashPassword } from "../../../utils/password";

const handler = connectHandler(
  "POST",
  async (
    req: NextApiRequest,
    res: NextApiResponse<Response<UserInterface>>
  ) => {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please provide an email and password");
    }

    const hashedPassword = await hashPassword(password);

    const user = new User({
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(200).json({
      message: "User created",
      data: user,
    });
  }
);

export default handler;
