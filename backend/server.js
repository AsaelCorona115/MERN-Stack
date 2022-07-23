const express = require("express");
const workoutRoutes = require("./routes/workouts");
require("dotenv").config();

//Express App
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/api/workouts", workoutRoutes);

//Listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Im listening on port ${process.env.PORT}`);
});
