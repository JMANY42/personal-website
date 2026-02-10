import type { SlideResponse } from '../../types/slide.ts'
import { useNavigate } from 'react-router-dom'

const Slide: React.FC<{ slide: SlideResponse }> = ({ slide }) => {
  const navigate = useNavigate();
  
  return (
    <div className="w-full h-full flex items-center justify-center bg-surface">
      <div className="w-full h-full px-8 py-12 text-center space-y-6 flex flex-col items-center justify-center">
        <h3 className="text-5xl font-semibold text-main">
          {slide.title}
        </h3>
        <p className="text-xl text-muted leading-relaxed max-w-4xl px-5">
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