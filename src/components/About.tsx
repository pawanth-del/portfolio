import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
   <section
  id="about"
  ref={sectionRef}
  className={`bg-gray-50 py-20 border-t border-gray-200 relative transition-all duration-1000 ${
    isVisible ? 'animate-fade-in' : 'opacity-0'
  }`}
>
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 
              bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 
              bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              A little introduction about who I am and what I love to do.
            </p>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image/Graphic */}
            <div
              className={`rounded-xl overflow-hidden shadow-lg transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
              }`}
            >
              <img
                src="/pawan.png"
                alt="About me"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Text */}
            <div
              className={`space-y-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              }`}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Hello! I’m <span className="font-semibold text-emerald-600">Pawan Kumar Gupta</span>, 
                a passionate developer who enjoys creating clean, modern, and functional 
                applications. I love working across the full stack, solving real-world 
                problems, and continuously learning new technologies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a strong foundation in <span className="font-medium text-cyan-600">React, Node.js, 
                and cloud services</span>, I aim to craft digital solutions that blend 
                usability and aesthetics.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Outside of coding, I enjoy exploring UI/UX design trends, mentoring 
                aspiring developers, and experimenting with side projects that challenge 
                my creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
