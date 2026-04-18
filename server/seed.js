import mongoose from "mongoose";
import dotenv from "dotenv";

import User from "./models/user.js";
import Hospital from "./models/Hospitals.js";
import Vaccine from "./models/Vaccine.js";
import Slot from "./models/Slot.js";
import Booking from "./models/Booking.js";

dotenv.config();

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("DB Connected");
};

// Random helpers
const cities = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"];
const vaccinesList = ["Covaxin", "Covishield", "Pfizer"];

const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const seedData = async () => {
  try {
    await connectDB();

    // Clear old data
    await User.deleteMany();
    await Hospital.deleteMany();
    await Vaccine.deleteMany();
    await Slot.deleteMany();
    await Booking.deleteMany();

    console.log("Old data cleared");

    // 👤 USERS (50)
    const users = [];
    for (let i = 0; i < 50; i++) {
      users.push({
        name: `User${i}`,
        email: `user${i}@mail.com`,
        password: "123456"
      });
    }
    const createdUsers = await User.insertMany(users);

    // 🏥 HOSPITALS (20)
    const hospitals = [];
    for (let i = 0; i < 20; i++) {
      hospitals.push({
        name: `Hospital${i}`,
        city: randomItem(cities),
        pincode: `${100000 + i}`
      });
    }
    const createdHospitals = await Hospital.insertMany(hospitals);

    // 💉 VACCINES (each hospital 2)
    const vaccines = [];
    createdHospitals.forEach((h) => {
      vaccines.push({
        hospitalId: h._id,
        name: randomItem(vaccinesList),
        price: Math.floor(Math.random() * 1000) + 200
      });
      vaccines.push({
        hospitalId: h._id,
        name: randomItem(vaccinesList),
        price: Math.floor(Math.random() * 1000) + 200
      });
    });
    const createdVaccines = await Vaccine.insertMany(vaccines);

    // 📅 SLOTS (each hospital 5 days)
    const slots = [];
    createdHospitals.forEach((h) => {
      for (let d = 1; d <= 5; d++) {
        const total = Math.floor(Math.random() * 50) + 10;
        slots.push({
          hospitalId: h._id,
          date: `2026-04-${10 + d}`,
          totalSlots: total,
          availableSlots: total
        });
      }
    });
    const createdSlots = await Slot.insertMany(slots);

    // 📋 BOOKINGS (100)
    const bookings = [];
    for (let i = 0; i < 100; i++) {
      const user = randomItem(createdUsers);
      const hospital = randomItem(createdHospitals);
      const vaccine = randomItem(createdVaccines);
      const slot = randomItem(createdSlots);

      bookings.push({
        userId: user._id,
        hospitalId: hospital._id,
        vaccineId: vaccine._id,
        date: slot.date,
        price: vaccine.price
      });
    }

    await Booking.insertMany(bookings);

    console.log("✅ 200+ records inserted successfully");
    process.exit();

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedData();