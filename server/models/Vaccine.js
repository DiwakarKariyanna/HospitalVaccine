import mongoose from "mongoose";

const schema = new mongoose.Schema({
  hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
  name: String,
  price: Number
});

export default mongoose.model("Vaccine", schema);