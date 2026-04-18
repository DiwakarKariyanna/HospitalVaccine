import express from "express";
import { createSlot, getSlots } from "../controllers/slotController.js";

const router = express.Router();

router.post("/createSlot", createSlot);
router.get("/slots", getSlots);

export default router;