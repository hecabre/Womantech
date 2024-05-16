import { Router } from "express";
import {
  getUniversityById,
  getUniversity,
  getUniversitys,
  getCareerId,
} from "../controllers/university.controller.js";

const router = Router();

router.get("/university", getUniversityById);
router.get("/universitys", getUniversitys);
router.get("/university/:id", getCareerId);
router.get("/universitys/:id", getUniversity);

export default router;
