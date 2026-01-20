import { Router } from "express";
import { getProject } from "../controllers/projectController.js";

const router = Router();

router.get("/:id", getProject);

export default router;
