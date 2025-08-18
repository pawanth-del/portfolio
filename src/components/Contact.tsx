import React from "react";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "pawangt2812@gmail.com",
      href: "mailto:pawangt2812@gmail.com",
    },
    {
      icon: MessageSquare,
      label: "Chat",
      value: "LinkedIn",
      href: "https://www.linkedin.com/in/pawan-gupta-435740113",
    },
  ];

  return (
    <section id="contact" className="bg-gray-50 py-20 border-t border-gray-200">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <p className="text-sm uppercase tracking-widest text-gray-600 mb-2">
          Let’s Talk!
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold mb-12 
          bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 
          bg-clip-text text-transparent"
        >
          Contact Me
        </h2>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md hover:shadow-xl 
              transition-shadow duration-300 p-10 flex flex-col 
              items-center justify-center space-y-4 border border-gray-200"
            >
              <method.icon
                size={36}
                className="text-emerald-500 group-hover:text-cyan-500 transition-colors"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {method.label}
              </h3>
              <p className="text-gray-600">{method.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
