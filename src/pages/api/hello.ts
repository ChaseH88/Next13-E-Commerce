import { connect } from "../../utils/server";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await connect();
};

export default handler;
