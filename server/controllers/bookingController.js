import Booking from "../models/Booking.js";
import Slot from "../models/Slot.js";

export const bookSlot = async (req, res) => {
  const slot = await Slot.findOneAndUpdate(
    { hospitalId: req.body.hospitalId, date: req.body.date, availableSlots: { $gt: 0 } },
    { $inc: { availableSlots: -1 } },
    { new: true }
  );

  if (!slot) return res.status(400).json({ msg: "Full" });

  const booking = await Booking.create(req.body);
  res.json(booking);
};