const express = require("express");
const FlightModel = require("../model/flight.model");

const flightRoutes = express.Router();

const getFlight = async (req, res) => {
  try {
    const flight = await FlightModel.find();
    res.status(200).send({ flight });
  } catch (err) {
    res.status(501).send({ message: err });
  }
};

flightRoutes.get("/flights", getFlight);

const getFlightbyId = async (req, res) => {
  const id = req.params.id;
  try {
    const flight = await FlightModel.findById({ _id: id });
    res.status(200).send({ flight });
  } catch (err) {
    res.status(501).send({ message: err });
  }
};

flightRoutes.get("/flights/:id", getFlightbyId);

const postFlight = async (req, res) => {
  const data = req.body;
  try {
    await FlightModel.insertMany(data);
    res.status(201).send({ message: "Added Successfully" });
  } catch (err) {
    res.status(501).send({ message: err });
  }
};

flightRoutes.post("/flights", postFlight);

const PatchFlight = async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  try {
      await FlightModel.findByIdAndUpdate(id, data);
    res.status(204).send({ message: "Successfuly Updated" });
  } catch (err) {
    res.status(501).send({ message: err });
  }
};

flightRoutes.patch("/flights/:id", PatchFlight);

const DeleteFlights = async (req, res) => {
  const id = req.params.id;
  try {
    await FlightModel.findByIdAndDelete({ _id: id });
    res.status(202).send({ message: "delete Flight successfully" });
  } catch (err) {
    res.status(501).send({ message: err });
  }
};

flightRoutes.delete("/flights/:id", DeleteFlights);

module.exports = flightRoutes;
