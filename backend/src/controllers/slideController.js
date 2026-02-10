import { getAllSlides } from "../services/slideService.js";

export async function getSlides(req, res) {
  try {
    const slides = await getAllSlides();

    if (!slides) {
      return res.status(404).json({ error: "Slides not found" });
    }

    res.json(slides);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load slides" });
  }
}