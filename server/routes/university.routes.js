import { Router } from "express";
import {
  getUniversityById,
  getUniversitys,
  getCareerId,
} from "../controllers/university.controller.js";

const router = Router();

router.get("/university", getUniversityById);
router.get("/universitys", getUniversitys);
router.get("/university/:id", getCareerId);

export default router;
