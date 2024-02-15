import mongoose from "mongoose";

const chordLyricSchema = new mongoose.Schema(
  {
    singerName: {
      type: String,
      required: true,
    },
    songTitle: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },

    chordLyric: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const chordLyricModel = mongoose.model("chordLyric", chordLyricSchema);
export default chordLyricModel;
