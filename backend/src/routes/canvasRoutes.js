import { Router } from "express";
import { getCanvas, postPixel } from "../controllers/canvasController.js";

export default function(broadcast) {
  const router = Router();
  router.get("/", getCanvas);
  router.post("/pixel", (req, res) => postPixel(req, res, broadcast));
  return router;
}