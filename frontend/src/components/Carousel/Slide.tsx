import type { SlideResponse } from '../../types/slide.ts'
import { useNavigate } from 'react-router-dom'

const Slide: React.FC<{ slide: SlideResponse }> = ({ slide }) => {
  const navigate = useNavigate();
  
  return (
    <div className="w-full h-full flex items-center justify-center bg-surface overflow-hidden">
      <div className="w-full h-full px-6 py-10 sm:px-8 sm:py-12 text-center space-y-6 flex flex-col items-center justify-center">
        <h3 className="text-3xl sm:text-5xl font-semibold text-main break-words">
          {slide.title}
        </h3>
        <p className="text-base sm:text-xl text-muted leading-relaxed max-w-full sm:max-w-4xl px-4 sm:px-5 break-words">
          {slide.content}
        </p>
        <div
          onClick={() => navigate(slide.path)}
          className="
            inline-block
            rounded-md
            bg-brand px-6 py-3
            text-lg text-main font-medium
            hover:bg-brand-muted
            transition
            cursor-pointer
          "
        >
          View More
        </div>
      </div>
    </div>
  );
};

export default Slide