import mongoose from "mongoose";

const playerSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Fill the name"],
  },
  position: {
    type: String,
    required: false,
  },
  nationality: {
    type: String,
    required: [true, "Fill the nationality"],
    default: "N/A",
  },
  club: {
    type: String,
    required: false,
    default: "N/A",
  },
  age: {
    type: Number,
    required: [true, "Fill the number"],
  },
});

const Player = mongoose.model("player",playerSchema);

export default Player;