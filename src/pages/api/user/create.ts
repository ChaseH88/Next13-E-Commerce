import { hashPassword } from "../../../utils/password";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "POST") {
      throw new Error("Method not allowed");
    }

    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please provide an email and password");
    }

    const hashedPassword = await hashPassword(password);

    console.log({
      email,
      password: hashedPassword,
    });

    res.status(200).json({ message: "User created" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default handler;
