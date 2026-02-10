import { Router } from "express";
import { forwardMessage } from "../controllers/contactController.js";

const router = Router();

router.post("/", forwardMessage);

export default router;
