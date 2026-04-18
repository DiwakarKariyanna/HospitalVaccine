// import express from 'express';
// import dotenv from 'dotenv';
// import connectDb from './config/connectDb.js';
// dotenv.config();


// const app = express();

// const PORT = process.env.PORT || 8000;

// app.get('/', (req, res) => {
//   // res.send('Hello, World!');
//   res.json({ message: 'Hello, World!' });
// });


// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
//   connectDb();
// });


import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/connectDb.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import hospitalRoutes from "./routes/hospitalsRoutes.js";
import vaccineRoutes from "./routes/vaccinesRoutes.js";
import slotRoutes from "./routes/slotRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
import Hospital from "./models/Hospitals.js";

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.get("/", async (req, res) => {
  try {
    const data = await Hospital.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

app.use("/api/auth", authRoutes);
app.use("/api/hospitals", hospitalRoutes);
app.use("/api/vaccines", vaccineRoutes);
app.use("/api/slots", slotRoutes);
app.use("/api/bookings", bookingRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);