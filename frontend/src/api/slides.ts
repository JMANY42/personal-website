import type { SlideResponse } from '../types/slide.ts'
import getCompleteApiPath from '../services/getCompleteApiPath.ts'

const apiPath = getCompleteApiPath('slides');

    
export async function fetchSlides(): Promise<SlideResponse[]> {
  const res = await fetch(apiPath);

  if (!res.ok) throw new Error("Failed to fetch slides");     
  return res.json();
}