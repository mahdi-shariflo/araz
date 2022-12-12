import { NextApiHandler } from "next";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import jwt from "jsonwebtoken";
import User from "../models/user";

export const withAuth =
  (f: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const token: string | any = req.cookies["auth"];
    if (!token)
    return res.status(401).send("access denied");
    
    // @ts-ignore
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
    const user = await User.findById(decoded.id);
   

    if (user) {
      // @ts-ignore
      req.user = user;
      return f(req, res);
    } else {
      return res.status(403).send("Forbidden");
    }
  };
