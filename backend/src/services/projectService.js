import fs from "fs/promises";
import path from "path";

const DATA_PATH = path.resolve("src/data/projects.json");

export async function getAllProjects() {
  const raw = await fs.readFile(DATA_PATH, "utf-8");
  return JSON.parse(raw);
}

export async function getProjectByPath(path) {
  const projects = await getAllProjects();
  return projects.find((p) => p.path === path);
}
