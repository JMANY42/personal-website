import Navbar from '../components/Navbar.tsx'
import Carousel from '../components/Carousel/Carousel.tsx'
import CarouselArrows from '../components/Carousel/CarouselArrows.tsx'
import CarouselIndicators from '../components/Carousel/CarouselIndicators.tsx'
import { useEffect, useState } from 'react'
import Slide from '../components/Carousel/Slide.tsx'
import type { SlideResponse } from '../types/slide.ts'
import { useNavigate } from 'react-router-dom'
import  { fetchSlides } from '../api/slides.ts'
import ResumeLink from '../components/ResumeLink.tsx'

function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [slides, setSlides] = useState<SlideResponse[]>([]);

  // Fetch slides
  useEffect(() => {
      let isMounted = true; // safe for cleanup
      setLoading(true);

      fetchSlides()
      .then((data) => {
          console.log("DATA ",data)
          if (isMounted) setSlides(data);
      })
      .catch((err) => {
          if (isMounted) setError(err.message);
      })
      .finally(() => {
          if (isMounted) setLoading(false);
      });


      return () => {
      isMounted = false; // cleanup in case component unmounts
      };

  }, []); // empty dependency → runs once on mount
  
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="min-h-screen w-full bg-bg flex flex-col">
      <div className="sticky top-0 z-10 bg-bg">
        <Navbar />
      </div>
      
      <main className="flex-1 w-full page-padding py-6 sm:py-8 md:py-12 overflow-y-auto">
        <div className="w-full h-full">
          {/* HERO SECTION */}
          <section className="mb-8 md:mb-12 animate-fadeInFirst max-w-5xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin text-accent mb-4 tracking-tight">
              Hello
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-main leading-relaxed">
              My name is Jonathan Lewis and this is my website
            </h2>
          </section>

          {/* CONTENT LAYOUT */}
          <div className="space-y-12 md:space-y-16 max-w-5xl mx-auto px-4">
            {/* ABOUT SECTION */}
            <section className="animate-slideInLeft">
              <div className="space-y-4 text-base sm:text-lg md:text-xl text-muted leading-relaxed">
                <p>
                  To clarify, my first name is David, but I go by my middle name of Jonathan
                </p>
                
                <p>
                  This webpage is being hosted on my personal server in my apartment, 
                  accessed via a cloudflared tunnel (if you wanted to know)
                </p>
                
                <p>
                  I plan on hosting my portfolio here, some information about me, 
                  and updates to my current projects, and my resume
                </p>
              </div>

              {/* LINKS */}
              <div className="flex flex-wrap gap-4 sm:gap-6 pt-6">
                <a 
                  href="https://linkedin.com/in/david-jonathan-lewis"
                  className="group inline-flex items-center gap-2 text-base sm:text-lg text-accent hover:text-main transition-all duration-300"
                  target="_blank" 
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
                
                <a 
                  href="https://github.com/JMANY42"
                  className="group inline-flex items-center gap-2 text-base sm:text-lg text-accent hover:text-main transition-all duration-300"
                  target="_blank" 
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>

                <ResumeLink/>
              </div>
            </section>

            {/* RECENT UPDATES SECTION */}

            { !loading && (<section className="animate-slideInRight">
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-main flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  Recent Updates
                </h2>
                <div
                  onClick={() => navigate("/projects")}
                  className="
                    text-base text-muted
                    hover:text-main
                    transition
                    cursor-pointer
                    underline underline-offset-4
                    decoration-muted hover:decoration-main
                    w-fit
                    ml-5
                  "
                >
                  View All Projects →
                </div>
              </div>
              
              <div className="bg-linear-to-br from-bg to-transparent rounded-lg px-2 sm:px-5 py-5 shadow-lg">
                <Carousel
                  autoplay
                  // allow taller carousel on small screens, revert to 16:9 aspect on larger
                  className="w-full h-[60vh] sm:aspect-video sm:h-auto rounded-4xl"
                  renderArrows={(api) => <CarouselArrows api={api} />}
                  renderIndicators={(api) => <CarouselIndicators api={api} />}
                >
                  {slides.map((slide) => (
                    <Slide key={slide.id} slide={slide} />
                  ))}
                </Carousel>
              </div>
            </section>)}
          </div>

          {/* FOOTER NOTE */}
          <div className="w-full page-padding py-4 bg-linear-to-t from-accent/5 to-transparent">
            <p className="text-center text-sm text-(--bg) hover:text-accent transition-colors duration-300">
              P.S. Check out{' '}
              <a href="https://dev.davidjonathanlewis.com" className="underline hover:no-underline">
                dev.davidjonathanlewis.com
              </a>
              {' '}and{' '}
              <a href="https://staging.davidjonathanlewis.com" className="underline hover:no-underline">
                staging.davidjonathanlewis.com
              </a>
              {' '}for the latest and (not so) greatest!
            </p>
          </div>
        </div>

      </main>
    </div>

  );
}

export default Home;