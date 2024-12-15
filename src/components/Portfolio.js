import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const offset = 80; // Height of the fixed header
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-2xl font-bold text-blue-600"
        >
          Rayan Alotaibi
        </motion.div>
        <nav className="space-x-6">
          {['Home', 'About', 'Projects', 'Skills', 'Resume', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-md font-medium transition-colors duration-300 text-gray-700 hover:text-blue-600"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

const AnimatedSection = ({ id, children, className }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      className={`min-h-screen flex items-center justify-center py-20 px-4 ${className}`}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <div ref={ref} className="bg-gradient-to-b from-gray-50 to-gray-100">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-[0%] z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      
      <AnimatedSection id="home" className="bg-gradient-to-b from-white to-gray-50">
        <motion.div
          style={{ opacity: backgroundOpacity }}
          className="text-center"
        >
          <motion.img 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            src="https://media.licdn.com/dms/image/v2/D4D03AQEntz1Tx6jiDQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722905951839?e=1739404800&v=beta&t=ygkb1pa-WFfsvuThAFqODJiuElirGBBKTUXJ7S5vIRE" // Replace with your image
            alt="Profile"
            className="mx-auto rounded-full w-48 h-48 object-cover mb-6 shadow-lg"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Rayan Alotaibi
          </h1>
          <p className="text-xl text-gray-600">
            Full Stack Web Developer | UX Designer
          </p>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection id="about" className="bg-white">
        <motion.div 
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Me</h2>
            <div className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                As a dedicated software engineering at King Saud University, I am passionate about web development and UI/UX design. My goal is to leverage my technical skills and creativity to develop innovative solutions that address real-world challenges.
                With a strong foundation in software engineering principles and hands-on experience in web technologies.
              </p>
              <p>
                I love solving complex problems and transforming creative ideas into 
                functional, user-friendly digital experiences. When I'm not coding, 
                you'll find me exploring new tech trends or working on personal projects.
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection id="projects" className="bg-gray-50">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "SweFlix Platform",
description: "SweFlix is an entertainment platform application similar to IMDb, designed to manage information about movies, series, and documentaries. The application allows administrators to perform user management tasks, including adding new users, updating user information, and deleting user accounts. Users can create personal watchlists, add content to them, rate content, and manage their preferences",
              technologies: ["Java Swing", "Java"]
            },
            {
              title: "Task Management App",
              description: "Productivity tool with real-time collaboration features",
              technologies: ["React", "Firebase", "TypeScript"]
            },
            {
              title: "Social Media Dashboard",
              description: "Analytics dashboard with data visualization",
              technologies: ["React", "Express"]
            }
          ].map((project, index) => (
            <div 
              key={index} 
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3 text-blue-600">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="skills" className="bg-white">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Technical Skills
          </h2>
          <div className="space-y-4">
            {[
              { name: "Java", level: 90 },
              { name: "React", level: 85 },
              { name: "Node.js", level: 80 },
              { name: "MongoDB", level: 75 },
              { name: "TypeScript", level: 70 }
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">{skill.name}</span>
                  <span className="text-gray-700">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="resume" className="bg-gray-50">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Professional Experience
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-600">
                Software Developer
              </h3>
              <p className="text-gray-600">Ulom | Jul 2024 - Aug 2024 · 2 months</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Mentored developers and improved team processes</li>
                <li>Implemented modern front-end architectures</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600">
                Data Analyst
              </h3>
              <p className="text-gray-600"> Ulom | Jul 2024 - Aug 2024 · 2 months</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>data analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contact" className="bg-white">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Contact Me
          </h2>
          <form className="space-y-4">
            <div>
              <label 
                htmlFor="name" 
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label 
                htmlFor="email" 
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label 
                htmlFor="message" 
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 text-white py-4 text-center">
    <p>&copy; 2024 Rayan Alotaibi. All Rights Reserved.</p>
  </footer>
);

export default Portfolio;

