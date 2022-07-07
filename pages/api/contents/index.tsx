import { NextApiRequest, NextApiResponse } from "next";
import dummy from "../../../db/dummy.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json(dummy);
}
