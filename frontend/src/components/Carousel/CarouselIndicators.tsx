import type { CarouselAPI } from "./Carousel";

export const CarouselIndicators: React.FC<{ api: CarouselAPI }> = ({ api }) => {
  return (
    <div
      className="
        absolute bottom-4 left-1/2 -translate-x-1/2
        z-10
        flex gap-2
      "
    >
      {Array.from({ length: api.count }).map((_, i) => (
        <button
          key={i}
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => api.goTo(i)}
          className={`
            h-2 w-2 rounded-full
            transition
            ${i === api.index
              ? "bg-white scale-110"
              : "bg-white/50 hover:bg-white/80"}
          `}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators