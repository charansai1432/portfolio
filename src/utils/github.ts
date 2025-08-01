import { Repository } from '../types/github';  

const GITHUB_API_BASE = 'https://api.github.com';  

interface GitHubError {  
  message: string;  
  documentation_url?: string;  
}  

const SPECIFIC_PROJECTS = [  
  'AWS-PROJECTS',  
  'Docker-Project',  
  'Image-object-Detection-and-Recognition',  
  'VirtuHR-Coach-',  
  'certificate-verification',  
  'Prediction-of-cyber-attacks-using-ML'  
];  

// Function to sort projects based on the specified order  
const sortProjects = (projects: Repository[]): Repository[] => {  
  const priority: Record<string, number> = {  
    'AWS-PROJECTS': 1,  
    'Docker-Project': 2,  
    'Image-object-Detection-and-Recognition': 3,  
    'VirtuHR-Coach-': 4,  
    'certificate-verification': 5,  
    'Prediction-of-cyber-attacks-using-ML': 6  
  };  

  return projects.sort((a, b) => (priority[a.name] ?? Infinity) - (priority[b.name] ?? Infinity));  
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

    // Filter to get only specific projects (case-insensitive matching)  
    const filteredProjects = data.filter((repo: Repository) =>
      SPECIFIC_PROJECTS.some(p => p.toLowerCase() === repo.name.toLowerCase())
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
    name: "Docker-Project",  
    description: "This repository contains my Docker Project...",  
    html_url: "https://github.com/charansai1432/Docker-Project",  
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
  },  
  {  
    name: "IOT-based-smart-garage-reporting",  
    description: "This project leverages Python, IoT, Sensors...",  
    html_url: "https://github.com/charansai1432/IOT-based-smart-garage-reporting",  
    topics: ["python", "IOT"],  
    homepage: "",  
    created_at: new Date().toISOString(),  
    fork: false  
  },  
  {  
    name: 'Python-projects',  
    description: "This repository contains my Python Projects...",  
    html_url: "https://github.com/charansai1432/Python-projects",  
    topics: ["python"],  
    homepage: "",  
    created_at: new Date().toISOString(),  
    fork: false  
  },  
  {  
    name: 'Prediction-of-cyber-attacks-using-ML',  
    description: "This repository contains my Cyber Security Projects using ML ...",  
    html_url: "https://github.com/charansai1432/Prediction-of-cyber-attacks-using-ML",  
    topics: ["python", "ML"],  
    homepage: "",  
    created_at: new Date().toISOString(),  
    fork: false  
  }  
];  

export interface Repository {  
  name: string;  
  description: string;  
  html_url: string;  
  topics: string[];  
  homepage: string;  
  created_at: string;  
  fork: boolean;  
}  
