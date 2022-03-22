const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "Joke is required"],
      minlength: [15, "Joke must be at least 15 characters long"],
    },
    punchline: {
      type: String,
      required: [true, "Punchline is required"],
      minlength: [3, "Punchline must be at least  characters long"],
    },
  },
  { timestamps: true }
);

const Joke = mongoose.model("Joke", JokesSchema);
module.exports = Joke;
