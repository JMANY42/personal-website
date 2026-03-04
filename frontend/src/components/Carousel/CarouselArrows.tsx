import type { CarouselAPI } from "./Carousel";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const CarouselArrows: React.FC<{ api: CarouselAPI }> = ({ api }) => {
  return (
    <>
      {/* Left Arrow */}
      <button
        aria-label="Previous slide"
        onClick={api.prev}
        className="
          absolute left-6 sm:left-3 bottom-3 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2
          z-10
          rounded-full
          bg-black/50 text-white
          p-3
          hover:bg-black/70
          transition
        "
      >
        <MdOutlineKeyboardArrowLeft/>
      </button>

      {/* Right Arrow */}
      <button
        aria-label="Next slide"
        onClick={api.next}
        className="
          absolute right-6 sm:right-3 bottom-3 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2
          z-10
          rounded-full
          bg-black/50 text-white
          p-3
          hover:bg-black/70
          transition
        "
      >
        <MdOutlineKeyboardArrowRight/>
      </button>
    </>
  );
};


export default CarouselArrows