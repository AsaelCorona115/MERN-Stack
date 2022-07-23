const express = require("express");

const router = express.Router();

//Get all workouts
router.get("/", (req, res) => {
  res.json({ msgg: "GET all workouts" });
});

//Get single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "Get  single workout " });
});

//Get single workout
router.post("/", (req, res) => {
  res.json({ mssg: "POST  a new workout " });
});

//Get single workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE  a new workout " });
});

//Get single workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE  a new workout " });
});

module.exports = router;
