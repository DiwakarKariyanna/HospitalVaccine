import mongoose from "mongoose";

const schema = new mongoose.Schema({
  hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
  date: String,
  totalSlots: Number,
  availableSlots: Number
});

export default mongoose.model("Slot", schema);