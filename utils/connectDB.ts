import mongoose from "mongoose";

const connectDB = async  () => {
  if (mongoose.connections[0].readyState) {
    console.log("already connected");
    return;
  }

  await mongoose
    .connect(
      process.env.MONGODB_URI!
    )
    .then(() => {
      console.log("connected DB");
    })
    .catch((err) => console.log(err));
};

export default connectDB;
