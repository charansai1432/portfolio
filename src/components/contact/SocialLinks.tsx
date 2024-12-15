import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-accent-500">Social Links</h3>
      <div className="flex gap-4">
        <motion.a 
          href="https://github.com/charansai1432"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="text-gray-400 hover:text-accent-500 transition-colors duration-200"
        >
          <Github className="w-6 h-6" />
        </motion.a>
        <motion.a 
          href="https://www.linkedin.com/in/charan2004/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: -10 }}
          className="text-gray-400 hover:text-accent-500 transition-colors duration-200"
        >
          <Linkedin className="w-6 h-6" />
        </motion.a>
      </div>
    </div>
  );
};

export default SocialLinks;