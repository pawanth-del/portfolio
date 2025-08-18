import React from "react";
import {  ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Travel Booking Website",
    description:
      "Developed comprehensive travel booking platform using React.js and Node.js, managing 200+ travel packages with real-time availability tracking",
    image: "/yatramiles.png",
 
    live: "https://Yatramiles.in",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Nitris Application",
    description:
      "Engineered a cross‐platform mobile app to streamline NITR’s internal processes.",
    image: "/Nitris.png",
   
    live: "https://play.google.com/store/apps/details?id=com.nitrkl.nitris&hl=en_IN",
    tech: ["Flutter", "Dart"],
  },
  {
    title: "Updated and Managed Rourkelapolice.in",
    description:
      "Developed an interactive dashboard for police to visualize CCTV coverage across wards.",
    image: "/rourkela.png",
   
    live: "https://www.rourkelapolice.in",
    tech: ["Dotnet","SSMS"],
  },
  {
    title: "Loan Approval Predictor",
    description:
      "An end-to-end ML web application built with Streamlit and scikit-learn to predict loan approval based on applicant details.",
    image: "/loan.png", // add a relevant image in your public folder
    live: "https://your-streamlit-app-link.com", // replace with actual deployed link
    tech: ["Python", "Streamlit", "Scikit-learn", "Flask"],
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-50 py-20 border-t border-gray-200"
    >
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 
            bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 
            bg-clip-text text-transparent"
          >
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Here are some of my featured projects, showcasing my skills in
            full-stack development and design.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 
              hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-gradient-to-r 
                    from-emerald-400 via-cyan-500 to-blue-500 text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-center space-x-6">
                {project && (
                  <a
          
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-500 hover:text-cyan-500 transition-colors"
                  >
                    
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-500 hover:text-cyan-500 transition-colors"
                  >
                    <ExternalLink size={18} /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
