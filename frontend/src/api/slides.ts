import type { SlideResponse } from '../types/slide.ts'

export async function fetchSlides(): Promise<SlideResponse[]> {
  const res = await fetch("http://localhost:5000/api/slides");    //LOCAL DEVELOPMENT ONLY
  // const res = await fetch("/api/slide");                      //SERVER ONLY
  if (!res.ok) throw new Error("Failed to fetch slides");     
  return res.json();
}