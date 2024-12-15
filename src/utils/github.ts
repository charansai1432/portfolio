import { Repository } from '../types/github';

const GITHUB_API_BASE = 'https://api.github.com';

interface GitHubError {
  message: string;
  documentation_url?: string;
}

export const fetchGithubProjects = async (username: string): Promise<Repository[]> => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        // Add a user agent to comply with GitHub API requirements
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
    return data
      .filter((repo: Repository) => !repo.fork)
      .sort((a: Repository, b: Repository) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      )
      .slice(0, 6);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return getFallbackProjects();
  }
};

// Fallback data in case GitHub API fails
const getFallbackProjects = (): Repository[] => [
  {
    name: "web-portfolio",
    description: "My personal portfolio website built with React, TypeScript, and Tailwind CSS",
    html_url: "https://github.com/charansai1432/portfolio",
    topics: ["react", "typescript", "tailwindcss"],
    homepage: "https://sujeeth.netlify.app",
    created_at: new Date().toISOString(),
    fork: false
  },
  {
    name: "AIML PROJECT",
    description: "A Project based on the Image Object Detection and Recognition by using ML MOdels",
    html_url: "https://github.com/charansai1432/Image-object-Detection-and-Recognition",
    topics: ["python", "ML MOdels", "AI"],
    homepage: "",
    created_at: new Date().toISOString(),
    fork: false
  },
  {
    name: "AWS Cloud Projects",
    description: "Wide Range of projects based on the AWS cloud Services",
    html_url: "https://github.com/charansai1432/AWS-PROJECTS",
    topics: ["aws", "security", "AWS Lambda" , "API Gateway"],
    homepage: "",
    created_at: new Date().toISOString(),
    fork: false
  }
];