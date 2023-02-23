const express = require("express");
const BookingModel = require("../model/booking.model");

const bookingRoutes = express.Router();

const allBooking = async (req, res) => {
  try {
    const booking = await BookingModel.find();
    res.status(200).send({ booking });
  } catch (err) {
    res.status(501).send({ message: err });
  }
};

bookingRoutes.get("/dashboard", allBooking);

const PostBooking = async (req, res) => {
  const data = req.body;
  try {
    await FlightModel.insertMany(data);
    res.status(201).send({ message: "Booking Successfully" });
  } catch (err) {
    res.status(501).send({ message: err });
  }
};

bookingRoutes.post("/booking", PostBooking);

module.exports = bookingRoutes;
