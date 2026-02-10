import type { Project } from '../types/project.ts'
import getCompleteApiPath from '../services/getCompleteApiPath.ts'

const apiPath = getCompleteApiPath('projects');
  
export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(apiPath);

  if (!res.ok) throw new Error("Failed to fetch projects");     
  return res.json();
}

export async function fetchProject(path: string): Promise<Project> {
  const res = await fetch(`${apiPath}/${path}`);

  if (!res.ok) throw new Error("Project not found");
  return (await res.json()) as Project;
}