import React, { useState, useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Travel Booking Website",
    description:
      "Developed travel booking platform using React.js and Node.js with 200+ travel packages & real-time tracking",
    image: "/yatramiles.png",
    live: "https://www.yatramiles.in",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Nitris Application",
    description:
      "Engineered a cross‐platform mobile app to streamline NITR's internal processes.",
    image: "/Nitris.png",
    live: "https://play.google.com/store/apps/details?id=com.nitrkl.nitris&hl=en_IN",
    tech: ["Flutter", "Dart"],
  },
  {
    title: "Rourkelapolice.in",
    description:
      "Developed an interactive dashboard for police to visualize CCTV coverage across wards.",
    image: "/rourkela.png",
    live: "https://www.rourkelapolice.in",
    tech: ["Dotnet", "SSMS"],
  },
  {
    title: "Loan Approval Predictor",
    description:
      "ML web app built with Streamlit & scikit-learn to predict loan approval.",
    image: "/loan.png",
    live: "https://your-streamlit-app-link.com",
    tech: ["Python", "Streamlit", "Scikit-learn", "Flask"],
  },
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(projects.length); // Start in middle for infinite scroll
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const extendedProjects = [...projects, ...projects, ...projects];

  // Determine slides visible based on window width
  const getSlidesOnScreen = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth < 640) return 1; // Mobile
    if (window.innerWidth < 1024) return 2; // Tablet
    return 3; // Desktop
  };
  const [slidesOnScreen, setSlidesOnScreen] = useState(getSlidesOnScreen());
  const slideWidthClass = "w-full sm:w-1/2 lg:w-1/3";

  // Handle window resize to update visible slides count
  useEffect(() => {
    const handleResize = () => setSlidesOnScreen(getSlidesOnScreen());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Infinite loop handling to reset slides seamlessly
  useEffect(() => {
    if (currentSlide >= projects.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(projects.length);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 600);
    }
    if (currentSlide < projects.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(projects.length * 2 - slidesOnScreen);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 600);
    }
  }, [currentSlide, slidesOnScreen]);

  // Slide movement handlers, moving by number of slides visible
  const nextSlide = () => setCurrentSlide((prev) => prev + slidesOnScreen);
  const prevSlide = () => setCurrentSlide((prev) => prev - slidesOnScreen);

  // Swipe support for touch devices
  useEffect(() => {
    let startX = 0,
      endX = 0;
    const handleTouchStart = (e: TouchEvent) => (startX = e.touches[0].clientX);
    const handleTouchMove = (e: TouchEvent) => (endX = e.touches[0].clientX);
    const handleTouchEnd = () => {
      if (startX - endX > 50) nextSlide();
      if (endX - startX > 50) prevSlide();
    };
    const slider = containerRef.current;
    if (slider) {
      slider.addEventListener("touchstart", handleTouchStart);
      slider.addEventListener("touchmove", handleTouchMove);
      slider.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      if (slider) {
        slider.removeEventListener("touchstart", handleTouchStart);
        slider.removeEventListener("touchmove", handleTouchMove);
        slider.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [slidesOnScreen]);

  // Calculate total pages for dots
  const totalPages = Math.ceil(projects.length / slidesOnScreen);

  return (
    <section
      id="projects"
      className="bg-gray-50 py-12 sm:py-16 lg:py-20 border-t border-gray-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 
            bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent"
          >
            Projects
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 mx-auto mb-6" />
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
            Some highlighted projects showcasing my skills in development & design.
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden" ref={containerRef}>
          <div
            className={`flex ${
              isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
            }`}
            style={{
              transform: `translateX(-${currentSlide * (100 / slidesOnScreen)}%)`,
            }}
          >
            {extendedProjects.map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className={`flex-shrink-0 px-2 sm:px-4 ${slideWidthClass}`}
              >
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden rounded-lg mb-4 sm:mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform transition-transform duration-500 lg:group-hover:scale-110"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4 text-center">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-center text-xs sm:text-sm mb-2 sm:mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-2 sm:mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Live Link with stopPropagation handlers */}
                  {project.live && (
                    <div className="flex justify-center mt-auto pointer-events-auto">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-emerald-500 hover:text-cyan-500 transition-colors text-sm"
                      >
                        <ExternalLink size={16} /> Live
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clickable Animated Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => {
            const isActive =
              Math.floor(currentSlide / slidesOnScreen) % totalPages === index;
            return (
              <button
                key={index}
                onClick={() =>
                  setCurrentSlide(projects.length + index * slidesOnScreen)
                }
                className={`h-2 rounded-full transition-all duration-500 ease-in-out focus:outline-none ${
                  isActive
                    ? "w-8 bg-gradient-to-r from-emerald-500 to-cyan-500"
                    : "w-4 bg-gray-300"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
