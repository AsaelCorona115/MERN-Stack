const express = require("express");
const Workouts = require("../models/workoutModel");
const router = express.Router();
const {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutControllers");

const requireAuth = require("../middleware/requireAuth");

//require auth for all workout routes
router.use(requireAuth);

//Get all workouts
router.get("/", getWorkouts);

//Get single workout
router.get("/:id", getSingleWorkout);

//Create a workout and post it to DB
router.post("/", createWorkout);

//Delete workout from DB
router.delete("/:id", deleteWorkout);

//Update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
