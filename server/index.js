import app from "./app.js";
import dotenv from "dotenv";
import { connectDb } from "./db.js";

dotenv.config();
connectDb();

app.listen(3000);

console.log("Server on port 3000");
