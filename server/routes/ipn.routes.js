import { Router } from "express";
import { listFacultyIpn } from "../controllers/ipn.controller.js";

const router = Router();

router.get("/facultys", listFacultyIpn);

export default router;
