import express from "express";
import {
  createChordLyric,
  getChordsLyrics,
  getChordLyricById,
} from "../controllers/chordLyricCtrl.js";

const chordLyricsRoutes = express.Router();

chordLyricsRoutes.post("/", createChordLyric);
chordLyricsRoutes.get("/", getChordsLyrics);
chordLyricsRoutes.get("/chord/:id", getChordLyricById);

// chordLyricsRoutes.get("/:id", getChordLyricById);

export default chordLyricsRoutes;
