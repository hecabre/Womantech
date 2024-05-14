import { Router } from "express";
import { listFacultyUam } from "../controllers/uam.controller.js";

const router = Router();

router.get("/facultys", listFacultyUam);

export default router;
