import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  { name: 'Frontend', skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'] },
  { name: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'SQL'] },
  { name: 'Tools', skills: ['Git', 'VS Code', 'Figma', 'Postman'] },
];

const About = () => {
  return (
    <section className="pt-20 min-h-screen">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-gray-300">
                I'm a passionate software engineer with a strong foundation in full-stack
                development. With [X] years of experience, I specialize in building
                scalable web applications and solving complex problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                When I'm not coding, you can find me working on myself.
                I believe in continuous learning and staying up-to-date with the
                latest technologies.
              </p>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Personal Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-primary">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">Kolkata, West Bengal, India</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary">Experience</h3>
                    <p className="text-gray-600 dark:text-gray-300">[X] Years</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">dshanto940@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary">Education</h3>
                    <p className="text-gray-600 dark:text-gray-300">BTech CSE</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="/your-photo.jpg"
                  alt="Profile"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {techStack.map((category) => (
                <div key={category.name} className="card">
                  <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 