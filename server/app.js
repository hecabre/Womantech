import express from "express";
import unamRouter from "./routes/unam.routes.js";
import uamRouter from "./routes/uam.routes.js";
import ipnRouter from "./routes/ipn.routes.js";

const app = express();
app.use(express.json());
app.use("/api/unam", unamRouter);
app.use("/api/ipn", ipnRouter);
app.use("/api/uam", uamRouter);
export default app;
