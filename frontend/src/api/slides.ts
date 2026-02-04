import type { SlideResponse } from '../types/slide.ts'

const apiPath = '/api/slides'
const fullApiPath = import.meta.env.MODE === 'production'
  ? apiPath
  : 'http://localhost:5000'+apiPath;
    
export async function fetchSlides(): Promise<SlideResponse[]> {
  const res = await fetch(fullApiPath);

  if (!res.ok) throw new Error("Failed to fetch slides");     
  return res.json();
}