import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  city: String,
  pincode: String
});

export default mongoose.model("Hospital", schema);