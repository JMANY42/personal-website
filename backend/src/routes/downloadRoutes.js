import { Router } from "express";
import { getResume } from "../controllers/downloadController.js";

const router = Router();

router.get("/resume", getResume);

export default router;
