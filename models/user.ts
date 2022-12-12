import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    phonenumber: {
      type: String,
      trim: true,
    },
    code: {
      type: Number,
    },
    fullname: {
      type: String,
    },
    username: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
    },
    job: {
      type: Array,
    },
    codemili: {
      type: String,
    },
    address: {
      type: String,
    },
    following: {
      type: Number,
      default: 0,
    },
    satisfaction: {
      type: Number,
      default: 0,
    },
  },

  {
    timestamps: true,
  }
);

const User =
  mongoose.models.User ||
  mongoose.model("User", UserSchema);

export default User;
