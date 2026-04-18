import Vaccine from "../models/Vaccine.js";

export const addVaccine = async (req, res) => {
  const v = await Vaccine.create(req.body);
  res.json(v);
};

export const getVaccines = async (req, res) => {
  const v = await Vaccine.find();
  res.json(v);
};