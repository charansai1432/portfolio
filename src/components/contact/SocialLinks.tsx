import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import leetcodeIcon from '../../assets/leetcode.png'; // adjust path as per your folder

const SocialLinks = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-accent-500">Social Links</h3>
      <div className="flex gap-4">
        {/* GitHub */}
        <motion.a 
          href="https://github.com/charansai1432"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="text-gray-400 hover:text-accent-500 transition-colors duration-200"
        >
          <Github className="w-6 h-6" />
        </motion.a>

        {/* LinkedIn */}
        <motion.a 
          href="https://www.linkedin.com/in/charan2004/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: -10 }}
          className="text-gray-400 hover:text-accent-500 transition-colors duration-200"
        >
          <Linkedin className="w-6 h-6" />
        </motion.a>

        {/* LeetCode with image */}
        <motion.a 
          href="https://leetcode.com/u/chintala-charan-sai/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: -10 }}
          className="transition-transform duration-200"
        >
          <img src={leetcodeIcon} alt="LeetCode" className="w-6 h-6 object-contain" />
        </motion.a>
      </div>
    </div>
  );
};

export default SocialLinks;
