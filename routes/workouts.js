const express = require("express");
const Workout = require("../models/workoutModel");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "GET single workouts" });
});

router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/", (req, res) => {
  res.json({ msg: "DELETE a new workout" });
});

router.patch("/", (req, res) => {
  res.json({ msg: "UPDATE a new workout" });
});

module.exports = router;
