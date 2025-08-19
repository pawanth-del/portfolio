"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const PageLoader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // ⏱ loader duration (2.5s)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-white">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
          >
            {/* ✨ Animated Name */}
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1.2 }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-5xl md:text-6xl font-[cursive] text-white"
            >
              Pawan Kumar Gupta
            </motion.h1>

            {/* ✨ Subtitle: Full Stack Developer */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              className="text-xl md:text-2xl mt-4 font-semibold text-yellow-400"
            >
              Full Stack Developer
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {/* This div fades in after loader */}
      <div
        className={`${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
      >
        {children}
      </div>
    </div>
  );
};

export default PageLoader;
