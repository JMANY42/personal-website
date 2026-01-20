import type { Project } from '../types/project.tsx'

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch("/api/projects");
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

export async function fetchProject(path: string): Promise<Project> {
  const res = await fetch(`/api/projects/${path}`);

  if (!res.ok) {
    throw new Error("Project not found");
  }

  return (await res.json()) as Project;
}