import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    images: {
      type: Array,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
    category: {
      type: Array,
    },
    view: {
      type: Number,
      default: 0,
    },
    location: {
      type: String,
    },
    instock: {
      type: Boolean,
      default: true,
    },
    rate: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: [
        "در حال آماده سازی",
        "آماده‌ی ارسال",
        "تحویل تا ساعاتی دیگر",
        "تحویل داده شد",
      ],
      default: " در حال آماده سازی",
    },
  },
  {
    timestamps: true,
  }
);

const Post =
  mongoose.models.Post ||
  mongoose.model("Post", PostSchema);

export default Post;
