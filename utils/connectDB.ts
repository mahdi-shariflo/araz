import mongoose from "mongoose";

const connectDB = async  () => {
  if (mongoose.connections[0].readyState) {
    console.log("already connected");
    return;
  }

  await mongoose
    .connect(
      "mongodb+srv://mahdi:m1a2h3d4i5@cluster0.jrbdkq6.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("connected DB");
    })
    .catch((err) => console.log(err));
};

export default connectDB;
