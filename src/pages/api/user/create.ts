import { hashPassword } from "../../../utils/password";
import { NextApiRequest, NextApiResponse } from "next";
import { User, UserInterface } from "../../../models/user";
import { connect } from "../../../utils/server";
import { connectHandler } from "../../../utils/connect-handler";

export type Response =
  | {
      message: string;
      data: UserInterface;
    }
  | {
      error?: string;
    };

const handler = connectHandler(
  async (req: NextApiRequest, res: NextApiResponse<Response>) => {
    try {
      if (req.method !== "POST") {
        throw new Error("Method not allowed");
      }

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
    } catch (error: any) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
);

export default handler;
