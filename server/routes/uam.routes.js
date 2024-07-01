import { Router } from "express";
import {
  listFacultyUam,
  facultyUAMById,
} from "../controllers/uam.controller.js";

const router = Router();

router.get("/facultys", listFacultyUam);
router.get("/faculty/:id", facultyUAMById);

export default router;
