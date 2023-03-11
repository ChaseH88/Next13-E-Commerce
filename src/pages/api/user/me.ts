import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { User, UserInterface } from "models/user";
import { Response } from "types/types";
import { connectHandler, checkPassword, generateToken } from "utils";

const handler = connectHandler(
  {
    method: "GET",
    isProtected: true,
  },
  async (req: NextApiRequest, res: NextApiResponse<Response<any>>) => {
    return res.status(200).json({ message: "Login successful", data: "" });
  }
);

export default handler;
