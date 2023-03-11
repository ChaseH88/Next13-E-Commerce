import { NextApiRequest, NextApiResponse } from "next";
import { Response } from "types/types";
import { connectHandler } from "utils";
import { deleteCookie } from "cookies-next";

const handler = connectHandler(
  {
    method: "POST",
    isProtected: true,
  },
  async (req: NextApiRequest, res: NextApiResponse<Response<null>>) => {
    deleteCookie("token", { req, res });
    return res.status(200).json({ message: "Logout successful", data: null });
  }
);

export default handler;
