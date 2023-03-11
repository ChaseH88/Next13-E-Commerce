import type { NextApiRequest, NextApiResponse } from "next";
import { connect } from "./server";

/**
 * Connects to the database
 */
export const connectHandler =
  (func: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await connect();
      await func(req, res);
    } catch (error: any) {
      console.error("connect-handler.ts: ", error);
      res
        .status(500)
        .json({ message: error.message || "Something went wrong" });
    }
  };