import React, { useEffect, useState } from 'react';  
import { fetchGithubProjects } from '../utils/github';  
import { Repository } from '../types/github';  

const Projects = ({ username }: { username: string }) => {  
  const [projects, setProjects] = useState<Repository[]>([]);  

  useEffect(() => {  
    const loadProjects = async () => {  
      const fetchedProjects = await fetchGithubProjects(username);  
      setProjects(fetchedProjects);  
    };  
    loadProjects();  
  }, [username]);  

  return (  
    <div>  
      <h2>Projects</h2>  
      <div className="project-cards-container">  
        {projects.map((project) => (  
          <div className="project-card" key={project.name} onClick={() => window.open(project.html_url, '_blank')}>  
            <h3>{project.name}</h3>  
            <p>{project.description}</p>  
            <p>Topics: {project.topics.join(', ')}</p>  
            <p>{project.fork ? "Forked" : "Original"}</p>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default Projects;