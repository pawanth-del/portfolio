import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Linkedin, Mail } from 'lucide-react';
import Lottie from 'lottie-react';
import type { LottieRefCurrentProps } from 'lottie-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast'];

  type LottieAnimationData = {
    op?: number;
    [key: string]: unknown;
  };

  const [lotieAni, setLotieAni] = useState<LottieAnimationData | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const targetFrame = useRef(0);
  const currentFrame = useRef(0);
  const animationActive = useRef(false);

  useEffect(() => {
    fetch('/lotie-ani.json')
      .then((res) => res.json())
      .then((data) => setLotieAni(data));
  }, []);

  useEffect(() => {
    let lastX = 0;
    let lastTime = Date.now();

    const handleMouseMove = (e: MouseEvent) => {
      if (!lotieAni || !lottieRef.current || !sectionRef.current) return;
      const bounds = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - bounds.left) / bounds.width;
      const now = Date.now();
      const speed = Math.abs(e.clientX - lastX) / (now - lastTime + 1);
      lastX = e.clientX;
      lastTime = now;

      const totalFrames = typeof lotieAni.op === 'number' ? lotieAni.op : 100;
      const frame = Math.floor(x * totalFrames + speed * 10) % totalFrames;
      targetFrame.current = frame;

      if (!animationActive.current) {
        animationActive.current = true;
        animateFrame();
      }
    };

    function animateFrame() {
      if (!lottieRef.current || !lotieAni) return;
      const totalFrames = typeof lotieAni.op === 'number' ? lotieAni.op : 100;
      currentFrame.current += (targetFrame.current - currentFrame.current) * 0.2;
      const frame = Math.max(0, Math.min(totalFrames - 1, Math.round(currentFrame.current)));
      lottieRef.current.goToAndStop(frame, true);

      if (Math.abs(currentFrame.current - targetFrame.current) > 0.5) {
        requestAnimationFrame(animateFrame);
      } else {
        animationActive.current = false;
      }
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [lotieAni]);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gray-50"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lottie Animation */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative w-full flex justify-center items-center h-[500px]">
              {lotieAni && (
                <Lottie
                  lottieRef={lottieRef}
                  animationData={lotieAni}
                  loop={false}
                  style={{ width: '500px', height: '500px' }}
                  className="mx-auto"
                />
              )}
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 
              bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 
              bg-clip-text text-transparent">
              Hey, my name is
              <span className="block bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Pawan Kumar Gupta
              </span>
            </h1>

            <div className="text-xl md:text-2xl text-gray-700 mb-8 h-8">
              <span className="border-r-2 border-emerald-400 animate-pulse">
                {displayText}
              </span>
            </div>

            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating beautiful, functional, and user-centered digital experiences.
              I bring ideas to life through code and design.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <button
                onClick={() => scrollToSection('#projects')}
                className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-200/40 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="border-2 border-emerald-400 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex justify-center space-x-6 mb-16">
              {[
               
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#contact', label: 'Email' }
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  onClick={social.href.startsWith('#') ? (e) => { e.preventDefault(); scrollToSection(social.href); } : undefined}
                  className="p-3 rounded-full bg-white shadow hover:shadow-md transition-all duration-300 transform hover:scale-110 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon size={24} className="text-emerald-600 group-hover:text-cyan-600 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-emerald-500 hover:text-cyan-500 transition-colors" />
      </button>
    </section>
  );
};

export default Hero;
