import type { NextApiRequest, NextApiResponse } from "next";
import { connect } from "./server";
import { getCookie } from "cookies-next";
import { decodeToken } from "./json-web-token";
import { JwtPayload } from "jsonwebtoken";
import { User } from "models/user";
import { CustomRequest } from "types/interfaces";

type HandlerConfig = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  isProtected?: boolean;
};

/**
 * Wrapper handler to handle repetitive tasks
 */
export const connectHandler =
  (
    { method, isProtected = false }: HandlerConfig,
    func: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
  ) =>
  async (req: CustomRequest, res: NextApiResponse) => {
    let token = null;

    if (req.headers.authorization) {
      token = req.headers.authorization?.split(" ")[1];
    }

    try {
      if (isProtected) {
        token = token || getCookie("token", { req, res });

        if (!token) {
          throw new Error("You must be logged in to continue.");
        }
        const decoded = decodeToken(token.toString());

        if (!(decoded?.payload as JwtPayload)?.userId) {
          throw new Error("Invalid token");
        }

        const user = await User.findById(
          (decoded?.payload as JwtPayload)?.userId
        );

        if (!user) {
          throw new Error("Invalid token");
        }

        req.userId = user._id.toString();

        // TODO: when we add roles, we can check them here
      }

      if (req.method !== method) {
        throw new Error("Method not allowed");
      }
      await connect();
      await func(req, res);
    } catch (error: any) {
      console.error("connect-handler.ts: ", error);
      res
        .status(500)
        .json({ message: error.message || "Something went wrong" });
    }
  };
