import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { User, UserInterface } from "models/user";
import { Response } from "types/types";
import { connectHandler, checkPassword, generateToken } from "utils";

const handler = connectHandler(
  {
    method: "POST",
    isProtected: false,
  },
  async (
    req: NextApiRequest,
    res: NextApiResponse<Response<UserInterface>>
  ) => {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please provide an email and password");
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      throw new Error(`Cannot find user with the email: ${email}`);
    }

    const isMatch = await checkPassword(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid password");
    }

    const token = generateToken({ userId: user._id });

    res.setHeader("Set-Cookie", `token=${token}; path=/; httponly; secure`);
    return res.status(200).json({ message: "Login successful", data: user });
  }
);

export default handler;
