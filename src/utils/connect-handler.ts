import type { NextApiRequest, NextApiResponse } from "next";
import { connect } from "./server";

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
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      if (isProtected) {
        throw new Error("You must be logged in to continue.");
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
