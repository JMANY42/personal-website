import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type CarouselDirection = "horizontal" | "vertical";

export interface CarouselProps {
  /** Slides */
  children: React.ReactNode[];

  /** Controlled index */
  index?: number;

  /** Default index (uncontrolled) */
  defaultIndex?: number;

  /** Called on slide change */
  onIndexChange?: (index: number) => void;

  /** Enable autoplay */
  autoplay?: boolean;

  /** Autoplay interval (ms) */
  autoplayInterval?: number;

  /** Pause autoplay on hover */
  pauseOnHover?: boolean;

  /** Loop around */
  loop?: boolean;

  /** Horizontal or vertical */
  direction?: CarouselDirection;

  /** Transition duration (ms) */
  transitionMs?: number;

  /** Drag threshold in px */
  dragThreshold?: number;

  /** Disable dragging */
  draggable?: boolean;

  /** Keyboard navigation */
  keyboard?: boolean;

  /** Custom className */
  className?: string;

  /** Render arrows */
  renderArrows?: (api: CarouselAPI) => React.ReactNode;

  /** Render indicators */
  renderIndicators?: (api: CarouselAPI) => React.ReactNode;
}

export interface CarouselAPI {
  index: number;
  count: number;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
}

/* -------------------------------------------------- */

export const Carousel: React.FC<CarouselProps> = ({
  children,
  index,
  defaultIndex = 0,
  onIndexChange,
  autoplay = false,
  autoplayInterval = 4000,
  pauseOnHover = true,
  loop = true,
  direction = "horizontal",
  transitionMs = 400,
  dragThreshold = 50,
  draggable = true,
  keyboard = true,
  className,
  renderArrows,
  renderIndicators,
}) => {
  const count = children.length;
  const isControlled = index !== undefined;

  const [internalIndex, setInternalIndex] = useState(defaultIndex);
  const activeIndex = isControlled ? index! : internalIndex;

  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<number | null>(null);

  const setIndex = useCallback(
    (next: number) => {
      const clamped = loop
        ? (next + count) % count
        : Math.max(0, Math.min(next, count - 1));

      if (!isControlled) setInternalIndex(clamped);
      onIndexChange?.(clamped);
    },
    [count, loop, isControlled, onIndexChange]
  );

  const api: CarouselAPI = useMemo(
    () => ({
      index: activeIndex,
      count,
      next: () => setIndex(activeIndex + 1),
      prev: () => setIndex(activeIndex - 1),
      goTo: setIndex,
    }),
    [activeIndex, count, setIndex]
  );

  /* ---------------- Autoplay ---------------- */

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const startAutoplay = useCallback(() => {
    if (!autoplay || autoplayRef.current) return;
    autoplayRef.current = window.setInterval(api.next, autoplayInterval);
  }, [autoplay, autoplayInterval, api]);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay]);

  /* ---------------- Drag ---------------- */

  const dragStart = useRef<number | null>(null);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!draggable) return;
    dragStart.current =
      direction === "horizontal" ? e.clientX : e.clientY;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStart.current === null) return;

    const end =
      direction === "horizontal" ? e.clientX : e.clientY;

    const delta = end - dragStart.current;

    if (Math.abs(delta) > dragThreshold) {
      delta > 0 ? api.prev() : api.next();
    }

    dragStart.current = null;
  };

  /* ---------------- Keyboard ---------------- */

  useEffect(() => {
    if (!keyboard) return;

    const handler = (e: KeyboardEvent) => {
      if (direction === "horizontal") {
        if (e.key === "ArrowRight") api.next();
        if (e.key === "ArrowLeft") api.prev();
      } else {
        if (e.key === "ArrowDown") api.next();
        if (e.key === "ArrowUp") api.prev();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [api, direction, keyboard]);

  /* ---------------- Styles ---------------- */

  const transform =
  direction === "horizontal"
    ? `translateX(-${(activeIndex * 100) / count}%)`
    : `translateY(-${(activeIndex * 100) / count}%)`;

return (
  <div
    ref={containerRef}
    className={`
      relative overflow-hidden
      touch-pan-x touch-pan-y
      ${className ?? ""}
    `}
    onMouseEnter={pauseOnHover ? stopAutoplay : undefined}
    onMouseLeave={pauseOnHover ? startAutoplay : undefined}
    onPointerDown={onPointerDown}
    onPointerUp={onPointerUp}
  >
    <div
      className={`
        flex
        ${direction === "horizontal" ? "flex-row" : "flex-col"}
        will-change-transform
      `}
      style={{
        transform,
        transition: `transform ${transitionMs}ms ease`,
        width: direction === "horizontal" ? `${count * 100}%` : "100%",
        height: direction === "vertical" ? `${count * 100}%` : "100%",
      }}
    >
      {children.map((child, i) => (
        <div
          key={i}
          className="flex justify-center items-center shrink-0 h-full"
          style={{
            width: direction === "horizontal" ? `${100 / count}%` : "100%",
          }}
        >
          {child}
        </div>
      ))}
    </div>

    {renderArrows?.(api)}
    {renderIndicators?.(api)}
  </div>
);

};

export default Carousel