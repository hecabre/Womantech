import { Router } from "express";
import {
  listFacultyUnam,
  facultyUNAMById,
} from "../controllers/unam.controller.js";

const router = Router();

router.get("/facultys", listFacultyUnam);
router.get("/faculty/:id", facultyUNAMById);
export default router;
