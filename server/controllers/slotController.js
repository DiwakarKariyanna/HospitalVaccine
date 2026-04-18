import Slot from "../models/Slot.js";

export const createSlot = async (req, res) => {
  const slot = await Slot.create({
    ...req.body,
    availableSlots: req.body.totalSlots
  });
  res.json(slot);
  console.log(slot);
};

export const getSlots = async (req, res) => {
  const slots = await Slot.find();
  res.json(slots);
};