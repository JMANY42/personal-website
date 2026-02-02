import fs from "fs/promises";
import path from "path";

const DATA_PATH = path.resolve("src/data/slides.json");

export async function getAllSlides() {
  const raw = await fs.readFile(DATA_PATH, "utf-8");
  return JSON.parse(raw);
}