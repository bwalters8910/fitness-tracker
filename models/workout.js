const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "What type of training is this?",
  },
  name: {
    type: String,
    required: "What's the name of this exercise?",
  },
  duration: {
    type: Number,
    required: "Enter a duration",
  },
  weight: {
    type: Number,
    required: "Enter amount of weight",
  },
  reps: {
    type: Number,
    required: "Enter number of reps",
  },
  sets: {
    type: Number,
    required: "Enter number of sets",
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
