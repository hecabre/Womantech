import { Router } from "express";
import { listFacultyUnam } from "../controllers/unam.controller.js";

const router = Router();

router.get("/facultys", listFacultyUnam);

export default router;
