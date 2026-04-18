import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
  vaccineId: { type: mongoose.Schema.Types.ObjectId, ref: "Vaccine" },
  date: String,
  price: Number
});

export default mongoose.model("Booking", schema);