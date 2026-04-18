import express from "express";
import { bookSlot } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/bookSlot", bookSlot);

export default router;