import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { fetchGithubProjects } from '../utils/github';
import type { Repository } from '../types/github';

const Projects = () => {
  const [projects, setProjects] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchGithubProjects('Sujeeth-infosec');
        setProjects(data);
        setError(null);
      } catch (err) {
        setError('Unable to load projects at the moment. Showing featured projects instead.');
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Projects</h2>
          
          {loading && (
            <div className="text-center text-gray-400">
              <div className="animate-pulse">Loading projects...</div>
            </div>
          )}

          {error && (
            <div className="text-center text-gray-400 mb-8">
              {error}
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                title={project.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                description={project.description || 'No description available'}
                technologies={project.topics.length > 0 ? project.topics : ['N/A']}
                github={project.html_url}
                live={project.homepage}
              />
            ))}
          </div>

          {!loading && !error && projects.length === 0 && (
            <div className="text-center text-gray-400">
              No projects found. Please check back later.
            </div>
          )}

          <div className="text-center mt-12">
            <a
              href="https://github.com/charansai1432"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent-500 text-white px-6 py-2 rounded-lg hover:bg-accent-600 transition-colors duration-200"
            >
              View More on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;