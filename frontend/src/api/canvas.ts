import getCompleteApiPath from '../services/getCompleteApiPath.ts';
import getWebSocketURL from '../services/getWebSocketURL.ts';
import type { PixelData } from '../types/PixelData.ts';

import type { CanvasData } from '../types/CanvasData.ts';
const CANVAS_API_URL = getCompleteApiPath('canvas');

export async function getCanvas(): Promise<CanvasData> {
  console.log(CANVAS_API_URL)

  const res = await fetch(CANVAS_API_URL);
  if (!res.ok) throw new Error("Failed to fetch canvas data");
  return res.json();
}


const PIXEL_API_URL = getCompleteApiPath('canvas/pixel');

export async function postPixel(data: PixelData) {
  const res = await fetch(PIXEL_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const data = await res.json();
    const isCooldown = res.status === 429;
    const message = isCooldown
      ? (data.error ?? 'Too many requests. Please wait.')
      : 'Failed to place pixel. Please try again.';
    throw new Error(message);
  }  
  return res.json();
}


const WS_URL = getWebSocketURL()

export function connectCanvas(onPixel: (x: number, y: number, color: string) => void): () => void {
  const ws = new WebSocket(WS_URL);

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    onPixel(data.x, data.y, data.color);
  };

  ws.onerror = (err) => console.error('WebSocket error:', err);

  // Return a cleanup function to close the socket
  return () => ws.close();
}