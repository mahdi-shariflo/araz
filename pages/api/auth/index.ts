// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/user";
import connectDB from "../../../utils/connectDB";

connectDB();

type Data = {
  message?: string;
  code?: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    createUser(req, res);
  } else {
    res.status(405).json({ message: "api not found" });
  }
}

const createUser = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { phonenumber } = req.body;
    const checkUser = await User.findOne({ phonenumber });
    const code = Math.floor(Math.random() * 90000) + 10000;

    if (isNaN(phonenumber))
      return res
        .status(400)
        .json({ message: "phonenumber is not a number" });

    if (checkUser) {
      await User.updateOne({ code });
      res.status(200).json({ message: "OK" });
      return;
    } else {
      const user = new User({ phonenumber });
      await user.save();
      res.status(200).json({ message: "OK" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
