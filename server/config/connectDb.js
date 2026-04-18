// import mongoose from 'mongoose';

// const connectDb = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URL)
//     console.log("Database connected");
//   } catch (error) {
//     console.log("Database error:", error.message);  }
// }

// export default connectDb;



import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;