import express from "express";
import unamRouter from "./routes/unam.routes.js";
import uamRouter from "./routes/uam.routes.js";
import ipnRouter from "./routes/ipn.routes.js";
import universityRouter from "./routes/university.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/unam", unamRouter);
app.use("/api", universityRouter);
app.use("/api/ipn", ipnRouter);
app.use("/api/uam", uamRouter);
export default app;
