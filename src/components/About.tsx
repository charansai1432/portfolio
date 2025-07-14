import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-accent-500 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" /> Education
              </h3>
              <div className="space-y-4">
                <div className="bg-dark-100 p-4 rounded-lg">
                  <h4 className="text-white font-medium">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-gray-400">Annamacharya Institute of Technology and Science</p>
                  <p className="text-gray-500">2021 – 2025 | Tirupati, India</p>
                </div>
                <div className="bg-dark-100 p-4 rounded-lg">
                  <h4 className="text-white font-medium">Intermediate in MPC</h4>
                  <p className="text-gray-400">Narayana Junior collage </p>
                  <p className="text-gray-500">2019-2021 | Anantapur, India</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-accent-500 flex items-center gap-2">
                <Briefcase className="w-5 h-5" /> Experience
              </h3>
              <div className="space-y-4">
                <div className="bg-dark-100 p-4 rounded-lg">
                  <h4 className="text-white font-medium">MERN Stack Developer && AWS Solutions Architect  </h4>
                  
                  <p className="text-gray-500">March 2024 – July 2024 | Visakhapatnam, India</p>
                  <ul className="list-disc list-inside text-gray-400 mt-2">
                    <li>Designed and deployed scalable cloud solutions using AWS services.</li>
                    <li>Automated deployment processes with CI/CD pipelines.</li>
                    <li>Optimized cloud infrastructure for cost and performance.</li>
                  </ul>
                </div>
                <div className="bg-dark-100 p-4 rounded-lg">
                  <h4 className="text-white font-medium">Software Developer</h4>
                  
                  <p className="text-gray-500">Feb 2025 – June 2025 | Remote </p>
                  <ul className="list-disc list-inside text-gray-400 mt-2">
                    <li>Developed and maintained web applications using React and Node.js.</li>
                    <li>Collaborated with cross-functional teams to deliver high-quality software.</li>
                    <li>Implemented RESTful APIs and integrated third-party services.</li>
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
