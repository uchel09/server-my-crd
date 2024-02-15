import chordLyricsRoutes from "./chordLyricRoute.js";

const allRoutes = (app) => {
  app.use("/api/chords-lyrics", chordLyricsRoutes);
};

export default allRoutes;
