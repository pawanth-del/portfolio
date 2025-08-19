"use client";
import React /*, { useEffect, useRef, useState } */ from "react";
import { motion } from "framer-motion";

const About = () => {
  /*
  //  Old IntersectionObserver-based animation (now commented)
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
  */

  // ✨ Variants for staggered animations
  const textContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }, // ⏱️ delay each child by 0.3s
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 20 }, // 🔽 start faded and slightly down
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }, // 🔼 fade+slide up (TS-safe)
    },
  };

  return (
    <section
      id="about"
      className="bg-gray-50 py-20 border-t border-gray-200 relative"
    >
      <div className="container mx-auto px-6">
        {/* 🟢 Heading Animation: Fade in + slide up */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 
            bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 
            bg-clip-text text-transparent"
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            A little introduction about who I am and what I love to do.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 🟢 Left Image Animation: Fade in + slide from left + scale in */}
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" as const }}
            viewport={{ once: true }}
          >
            <img
              src="/pawan.png"
              alt="About me"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </motion.div>

          {/* 🟢 Right Text Animation: Staggered fade-in + slide up */}
          <motion.div
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              variants={textItem}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Hello! I’m{" "}
              <span className="font-semibold text-emerald-600">
                Pawan Kumar Gupta
              </span>
              , a passionate developer who enjoys creating clean, modern, and
              functional applications. I love working across the full stack,
              solving real-world problems, and continuously learning new
              technologies.
            </motion.p>

            <motion.p
              variants={textItem}
              className="text-lg text-gray-700 leading-relaxed"
            >
              With a strong foundation in{" "}
              <span className="font-medium text-cyan-600">
                React, Node.js, and cloud services
              </span>
              , I aim to craft digital solutions that blend usability and
              aesthetics.
            </motion.p>

            <motion.p
              variants={textItem}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Outside of coding, I enjoy exploring UI/UX design trends,
              mentoring aspiring developers, and experimenting with side
              projects that challenge my creativity.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
