import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-10">
      <div className="container mx-auto px-6">
        {/* Name with horizontal lines */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500"></div>
          <span className="mx-4 text-lg font-semibold bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Pawan Kumar Gupta
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500"></div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8 mb-6">
          <a
            href="https://www.linkedin.com/in/pawan-gupta-435740113"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-emerald-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:pawangt2812@gmail.com"
            className="text-cyan-400 hover:text-emerald-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={28} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          All Rights Reserved © 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;