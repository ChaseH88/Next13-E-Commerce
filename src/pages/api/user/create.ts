import { NextApiRequest, NextApiResponse } from "next";
import { User } from "models/user";
import { Response } from "types/types";
import { UserInterface } from "types/interfaces";
import { connectHandler, hashPassword, generateToken } from "utils";

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

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await hashPassword(password);

    const user = new User({
      email,
      password: hashedPassword,
    });

    await user.save();
    user.password = undefined;

    const token = generateToken({ userId: user._id });

    res.setHeader("Set-Cookie", `token=${token}; path=/; httponly`);
    res.status(200).json({
      message: "User created",
      data: user,
    });
  }
);

export default handler;
