import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Shield, Cloud, Container } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-200 to-dark-300 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Chintala Charan sai
          </h1>
          <div className="flex justify-center gap-4 mb-6">
            <Shield className="w-8 h-8 text-accent-500" />
            <Cloud className="w-8 h-8 text-accent-500" />
            <Container className="w-8 h-8 text-accent-500" />
          </div>
          <p className="text-xl text-gray-300 mb-8">
            MERN Stack Developer && AWS Solutions Architect 
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I am Chintala Charan Sai, a passionate Cloud Engineer with a completed B.Tech in Computer Science and Engineering, specializing in Cyber Security, IoT, and Blockchain. I have hands-on experience with AWS services, CI/CD pipelines, Docker, Kubernetes, and web development using React.js. I’ve worked on real-time projects like an AI-powered Virtual HR Coach, a multi-tier Docker Swarm application, and a serverless Fortune Teller app using AWS Lambda. With previous experience as an AWS Solutions Architect Intern at Infispec Innovations and current work as a Software Developer at GreatHire, I bring practical expertise in cloud deployment, automation, and system optimization. I am also certified in AWS, Microsoft Azure, and Network Defense Essentials.</p>
          <div className="flex justify-center gap-4 mt-8">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a href="#projects" className="btn btn-outline">View Projects</a>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-12"
          >
            <ChevronDown className="w-6 h-6 mx-auto text-accent-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
