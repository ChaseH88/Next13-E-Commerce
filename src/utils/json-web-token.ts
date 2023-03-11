import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

export const generateToken = (payload: any) =>
  jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "30d",
  });

export const verifyToken = (token: string) =>
  jwt.verify(token, process.env.JWT_SECRET!);
