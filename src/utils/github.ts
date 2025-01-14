import { Repository } from '../types/github';  

const GITHUB_API_BASE = 'https://api.github.com';  

interface GitHubError {  
  message: string;  
  documentation_url?: string;  
}  

const SPECIFIC_PROJECTS = [  
  'AWS-PROJECTS',  
  'Python-projects',  
  'Image-object-Detection-and-Recognition'  
];  

// Function to sort projects based on the specified order  
const sortProjects = (projects: Repository[]): Repository[] => {  
  const priority = {  
    'AWS-PROJECTS': 1,  
    'Python-projects': 2,  
    'Image-object-Detection-and-Recognition': 3  
  };  

  return projects.sort((a, b) => (priority[a.name] || Infinity) - (priority[b.name] || Infinity));  
};  

export const fetchGithubProjects = async (username: string): Promise<Repository[]> => {  
  try {  
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos`, {  
      headers: {  
        'Accept': 'application/vnd.github.v3+json',  
        'User-Agent': 'Portfolio-App'  
      }  
    });  

    if (response.status === 403) {  
      console.warn('GitHub API rate limit exceeded. Using fallback data.');  
      return getFallbackProjects();  
    }  

    if (!response.ok) {  
      const error: GitHubError = await response.json();  
      throw new Error(error.message || 'Failed to fetch projects');  
    }  

    const data = await response.json();  

    // Filter to get only specific projects  
    const filteredProjects = data.filter((repo: Repository) =>  
      SPECIFIC_PROJECTS.includes(repo.name)  
    );  

    // Sort projects based on the defined order  
    return sortProjects(filteredProjects);  
  } catch (error) {  
    console.error('Error fetching projects:', error);  
    return getFallbackProjects();  
  }  
};  

// Fallback data in case GitHub API fails  
const getFallbackProjects = (): Repository[] => [  
  {  
    name: "AWS-PROJECTS",  
    description: "Welcome to my AWS Projects repository...",  
    html_url: "https://github.com/charansai1432/AWS-PROJECTS",  
    topics: ["html"],  
    homepage: "",  
    created_at: new Date().toISOString(),  
    fork: false  
  },  
  {  
    name: "Python-projects",  
    description: "This repository contains my Python Projects...",  
    html_url: "https://github.com/charansai1432/Python-projects",  
    topics: ["python"],  
    homepage: "",  
    created_at: new Date().toISOString(),  
    fork: false  
  },  
  {  
    name: "Image-object-Detection-and-Recognition",  
    description: "This project leverages Python, computer vision...",  
    html_url: "https://github.com/charansai1432/Image-object-Detection-and-Recognition",  
    topics: ["python", "deep-learning"],  
    homepage: "",  
    created_at: new Date().toISOString(),  
    fork: false  
  }  
];