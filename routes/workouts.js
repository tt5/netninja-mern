const express = require("express");
const {
  getWorkouts, 
  getWorkout, 
  createWorkout,
} = require('../controllers/workoutController');

const router = express.Router();

router.get("/", getWorkouts);

router.get("/:id", getWorkout);

router.post("/", createWorkout);

router.delete("/", (req, res) => {
  res.json({ msg: "DELETE a new workout" });
});

router.patch("/", (req, res) => {
  res.json({ msg: "UPDATE a new workout" });
});

module.exports = router;
