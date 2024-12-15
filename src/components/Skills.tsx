import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './skills/SkillCard';
import { skillsData } from './skills/skillsData';

const Skills = () => {
  const certifications = [
    "Microsoft Certified: Azure Administrator Associate",
    "Solutions Architect Badge - AWS",
    "Network Defence Essentials - EC-Council",
    "Cloud Platform Virtual Experience Program-Forage"
  ];

  return (
    <section id="skills" className="py-20 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized in web development, cloud infrastructure, and modern development practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillCard
                  icon={skill.icon}
                  title={skill.title}
                  items={skill.items}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-dark-100 text-gray-300 px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-dark-200 transition-colors duration-200"
                >
                  {cert}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;