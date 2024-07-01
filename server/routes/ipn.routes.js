import { Router } from "express";
import {
  facultyIpnById,
  listFacultyIpn,
} from "../controllers/ipn.controller.js";

const router = Router();

router.get("/facultys", listFacultyIpn);
router.get("/faculty/:id", facultyIpnById);

export default router;
