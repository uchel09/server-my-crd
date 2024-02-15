import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/connectDb.js";
import allRoutes from "./routes/index.js";
import errorMiddleware from "./middlewares/errorHandler.js";

connectDB();
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = ["http://localhost:5173"];
// cors access handler
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", allowedOrigins);
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  next();
});

allRoutes(app);
app.use(errorMiddleware);
app.listen(process.env.PORT || 8080, () => {
  console.log(`server running  on port ${process.env.PORT || 8080}`);
});
