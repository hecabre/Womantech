import express from "express";
import unamRouter from "./routes/unam.routes.js";
import uamRouter from "./routes/uam.routes.js";
import ipnRouter from "./routes/ipn.routes.js";
import universityRouter from "./routes/university.routes.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());

app.use(cors({ origin: "https://womantech.vercel.app", credentials: true }));

app.use("/api/unam", unamRouter);
app.use("/api", universityRouter);
app.use("/api/ipn", ipnRouter);
app.use("/api/uam", uamRouter);
export default app;
