// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/user";
import connectDB from "../../../utils/connectDB";
import { createAccessToken } from "../../../utils/generateToken";
import Cookie from "cookie";
connectDB();

type Data = {
  message?: string;
  user?: {};
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    verifyUser(req, res);
  } else {
    res.status(405).json({ message: "api not found" });
  }
}

const verifyUser = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { phonenumber, code } = req.body;
    const user = await User.findOne({ phonenumber }).select(
      ["_id", "code", "phonenumber", "admin"]
    );

    if (!user)
      return res
        .status(400)
        .json({ message: "user not found" });

    if (user.code !== code)
      return res
        .status(400)
        .json({ message: "Invalid code" });

    const create_access_token = await createAccessToken({
      id: user._id,
    });

    await res.setHeader(
      "Set-Cookie",
      Cookie.serialize("auth", create_access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 3600,
        path: "/",
      })
    );

    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        phonenumber: user.phonenumber,
      },
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
