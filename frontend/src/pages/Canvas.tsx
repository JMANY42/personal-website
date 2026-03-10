import Navbar from '../components/Navbar.tsx'
import { useRef, useEffect, useState } from 'react'
import { getCanvas, postPixel, connectCanvas } from '../api/canvas.ts'
import type { CanvasData } from '../types/CanvasData.tsx';
import { GithubPicker } from 'react-color';

function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('#000000');
  const [postError, setPostError] = useState<{ message: string; isCooldown: boolean } | null>(null);
  const postErrorTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    // Fetch canvas data from backend
    getCanvas()
    .then((data: CanvasData) => {
        canvas.width = data.width;
        canvas.height = data.height;

        const imageData = ctx.createImageData(data.width, data.height);
        const pixelData = imageData.data;

        // Fill with white as default
        pixelData.fill(255);

        // Place each pixel by its x/y coordinate
        for (const pixel of data.pixels) {
            const pixelIndex = (pixel.y * data.width + pixel.x) * 4;
            const r = parseInt(pixel.color.slice(1, 3), 16);
            const g = parseInt(pixel.color.slice(3, 5), 16);
            const b = parseInt(pixel.color.slice(5, 7), 16);
            pixelData[pixelIndex]     = r;
            pixelData[pixelIndex + 1] = g;
            pixelData[pixelIndex + 2] = b;
            pixelData[pixelIndex + 3] = 255;
        }

        ctx.putImageData(imageData, 0, 0);
        setLoading(false);
    })
    .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
    });

    // Connect WebSocket after canvas is ready
    const disconnect = connectCanvas((x, y, color) => {
      console.log("Received pixel update via WebSocket: ", { x, y, color });
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 1, 1); // paint a single pixel directly
    });

    return disconnect; // React calls this on unmount to close the socket
  }, []);

  const showPostError = (message: string, isCooldown: boolean) => {
    if (postErrorTimerRef.current) clearTimeout(postErrorTimerRef.current);
    setPostError({ message, isCooldown });
    const time = Number(message.match(/\d(?=s)/i)?.[0]) || 5; // default to 5 seconds if no number found
    postErrorTimerRef.current = setTimeout(() => setPostError(null), time * 1000);
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();

    // Scale click position from displayed size to actual canvas pixel dimensions
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);

    postPixel(
      {x: x, y: y, color: selectedColor})
      .then(() => {})
      .catch((err) => {
        console.error("error__", err.message);
        showPostError(err.message, true);      
      });
  };

  const handleColorChange = (color: { hex: string }) => {
    setSelectedColor(color.hex);
  };

  const colors = ['#FFFFFF', '#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB',
                  '#000000', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'];

   return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center p-4">
        {/* Left gap with color picker centered */}
        <div className="flex flex-1 justify-center items-center">
          <div className="flex flex-col gap-10">
            <GithubPicker
              onChangeComplete={handleColorChange}
              triangle="hide"
              color="#000000"
              colors={colors}
              width="240px"
            />
            <p className="pt-10 text-main">PS. Can you figure out how to paint using a color of your choosing? (And learn why back end verification is so important)</p> 
          </div>
	</div>
        {/* Canvas */}
        <div className="flex flex-col items-center justify-center max-w-2xl w-full gap-2">
          {loading && <div className="text-white">Loading canvas...</div>}
          {error && <div className="text-red-500">Error: {error}</div>}
          <canvas
            ref={canvasRef}
            onClick={handleCanvasClick}
            className="border-4 border-gray-300 bg-white shadow-lg w-full aspect-square max-w-2xl"
            style={{ imageRendering: 'pixelated', display: loading || error ? 'none' : 'block' }}
          />

          <div className="relative w-full h-0">
            {postError && (
              <div
                className={`absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg text-white text-sm font-medium whitespace-nowrap
                  ${postError.isCooldown ? 'bg-yellow-600' : 'bg-red-600'}`}
              >
                <span>{postError.isCooldown ? '⏳' : '⚠️'}</span>
                <span>{postError.message}</span>
                <button
                  onClick={() => setPostError(null)}
                  className="ml-2 text-white/70 hover:text-white text-lg leading-none"
                >
                  ×
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right gap */}
        <div className="flex-1" />
      </div>
    </div>
  );
}

export default Canvas;
