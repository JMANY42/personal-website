import type { Project } from '../types/project.ts'

const apiPath = '/api/projects'
const fullApiPath = import.meta.env.MODE === 'production'
  ? apiPath
  : 'http://localhost:5000'+apiPath;

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(fullApiPath);

  if (!res.ok) throw new Error("Failed to fetch projects");     
  return res.json();
}

export async function fetchProject(path: string): Promise<Project> {
  const res = await fetch(`${fullApiPath}/${path}`);

  if (!res.ok) throw new Error("Project not found");
  return (await res.json()) as Project;
}