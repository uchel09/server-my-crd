import ErrorHandler from "../middlewares/errorClass.js";
import chordLyricModel from "../models/chordLyricModel.js";

export const createChordLyric = async (req, res, next) => {
  console.log(req.body);
  try {
    const newChordLyric = await chordLyricModel.create(req.body);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "add chord and lyric success",
      data: newChordLyric,
    });
  } catch (error) {
    console.log(error);
    next(new ErrorHandler(error, 500));
  }
};

export const getChordsLyrics = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const chords = await chordLyricModel.find().skip(skip).limit(limit);
    res.status(200).json(chords);
  } catch (error) {
    console.error("Gagal mengambil data chord:", error);
    next(new ErrorHandler("Gagal mengambil data Internal server Error", 500));
  }
};

export const getChordLyricById = async (req, res, next) => {
  try {
    const chordLyric = await chordLyricModel.findById(req.params.id);
    if (!chordLyric) {
      next(new ErrorHandler("Chord tidak ditemukan", 404));
    }
    res.status(200).json({
      success: true,
      data: chordLyric,
    });
  } catch (error) {
    console.error("Gagal mengambil data chord:", error);
    next(new ErrorHandler("Gagal mengambil data Internal server Error", 500));
  }
};
