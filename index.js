import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stores from "./Routes/stores.js";
import connectDB from "./config/db.js";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

dotenv.config({ path: "./config/config.env" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

connectDB();

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/stores", Stores);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
