import mongoose from "mongoose";

export const connectDB = async () => {
  //   try {
  //     await mongoose.connect(process.env.DBURI);
  //     console.log("db connected");
  //   } catch (error) {
  //     console.log(error, "db error");
  //   }
  try {
    const conn = await mongoose.connect(process.env.DBURI);
    console.log(`Connected to MongoDB Database ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`MongoDB Error ${error}`);
  }
};
