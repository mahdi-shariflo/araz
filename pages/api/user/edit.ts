// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import { withAuth } from "../../../middleware/withProtect";
import connectDB from "../../../utils/connectDB";
import User from "../../../models/user";

type Data = {
  message: string;
};

connectDB();
// config bodyParser
export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "PUT") {
    updateUser(req, res);
  } else {
    res.status(405).json({ message: "api not found" });
  }
}

// config uolpad image
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];

      const uniqueSuffix =
        Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, `${file.fieldname}_${uniqueSuffix}.${ext}`);
    },
  }),
}).single("image");

const updateUser = async (
  req: any,
  res: NextApiResponse
) => {
  try {
    // find user
    let user = await User.findOne({
      // @ts-ignore
      _id: req.user._id,
    });

    // check user exists or not
    if (!user) {
      return res.status(400).json({
        message: "کاربری با این مشخصات یافت نشد",
      });
    }
    // @ts-ignore
    await upload(req, res, async (err) => {
      if (err) {
        return res
          .status(422)
          .json({ message: err.message });
      }
     
      if (req.file) {
        req.file = {
          image:`http://localhost:3000/uploads/${req.file.filename}`
        };
      }

      await User.findByIdAndUpdate(
        { _id: user._id },
        {
          ...req.file,
          ...req.body,
        },
        { new: true }
      );
    });
    res.status(200).json({message:"ok"})
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

export default withAuth(handler);
