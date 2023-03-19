import { NextApiRequest, NextApiResponse } from "next";
import { User } from "models/user";
import { Response } from "types/types";
import { UserInterface } from "types/interfaces";
import { connectHandler, checkPassword, generateToken } from "utils";
import { setCookie } from "cookies-next";

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

    const user = await User.findOne({
      email: { $regex: new RegExp(email, "i") },
    }).select("+password");

    if (!user) {
      throw new Error(`Cannot find user with the email: ${email}`);
    }

    const isMatch = await checkPassword(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid password");
    }

    const token = generateToken({ userId: user._id });
    user.password = undefined;

    setCookie("token", token, { req, res, maxAge: 60 * 6 * 24 });
    return res.status(200).json({ message: "Login successful", data: user });
  }
);

export default handler;
