import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, items }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-dark-100 p-6 rounded-lg transform transition-all duration-300 hover:shadow-xl"
  >
    <div className="flex items-center gap-3 mb-4">
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-6 h-6 text-accent-500" />
      </motion.div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-gray-400 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 bg-accent-500 rounded-full"></span>
          {item}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

export default SkillCard;