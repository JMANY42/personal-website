import { getAllProjects, getProjectByPath } from "../services/projectService.js";

export async function getProjects(req, res) {
  try {
    const project = await getAllProjects();

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load project" });
  }
}
export async function getProject(req, res) {
  try {
    const project = await getProjectByPath(req.params.id);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load project" });
  }
}