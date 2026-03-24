import type { PixelData } from './PixelData.ts';

export interface CanvasData {
    width: number;
    height: number;
    pixels: PixelData[];
}
