import express from "express";
import { addVaccine, getVaccines } from "../controllers/vaccineController.js";

const router = express.Router();

router.post("/addvaccine", addVaccine);
router.get("/vaccine", getVaccines);

export default router;