import React, { useEffect, useRef, useState } from 'react';
import { Code2, Database, Layout, Server } from 'lucide-react';

const Skills = () => {
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

  const skills = [
    {
      id: 1,
      icon: Layout,
      title: 'Frontend Development',
      description:
        'Building responsive, interactive, and user-friendly interfaces using React, Next.js, and Tailwind CSS.',
    },
    {
      id: 2,
      icon: Server,
      title: 'Backend Development',
      description:
        'Designing scalable APIs and server-side logic with Node.js, Express, and cloud services.',
    },
    {
      id: 3,
      icon: Database,
      title: 'Databases',
      description:
        'Experience with SQL and NoSQL databases like PostgreSQL, MySQL, and MongoDB.',
    },
    {
      id: 4,
      icon: Code2,
      title: 'Problem Solving',
      description:
        'Strong grasp of algorithms, data structures, and debugging to deliver efficient solutions.',
    },
  ];

  return (
    <section
  id="skills"
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
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 
              bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 
              bg-clip-text text-transparent"
            >
              Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              A showcase of my core technical skills and areas of expertise.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.id}
                className={`p-8 rounded-xl shadow-md border border-gray-200 
                hover:shadow-xl bg-white transition-all duration-500 
                transform hover:scale-105 group ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-6">
                  <skill.icon
                    size={48}
                    className="text-emerald-500 group-hover:text-cyan-500 transition-colors"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  {skill.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
