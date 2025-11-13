// src/utils/github.ts
const GITHUB_API_BASE = 'https://api.github.com';

export interface Repository {
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  homepage: string | null;
  created_at?: string;
  fork: boolean;
  stargazers_count?: number;
  archived?: boolean;
}

/* === Your exact list (display these ONLY, in this order) === */
export const SPECIFIC_PROJECTS = [
  'AWS-PROJECTS',
  // 'Docker-Project',
  'Image-object-Detection-and-Recognition',
  'VirtuHR-Coach',
  'certificate-verification',
  // 'Prediction-of-cyber-attacks-using-ML',
  'AI-Study-Buddy',
  // 'IOT-based-smart-garage-reporting',
  'Python-projects'
];

/* Normalize helpers: ignore case, hyphens, underscores, dots, spaces */
const normalize = (s: string) =>
  (s || '')
    .toString()
    .toLowerCase()
    .replace(/[-_.\s]+/g, '')
    .trim();

const SPECIFIC_NORMALIZED = SPECIFIC_PROJECTS.map(normalize);

/* Fetch one page of repos (per_page up to 100) */
async function fetchPage(username: string, page = 1, per_page = 100) {
  const url = `${GITHUB_API_BASE}/users/${encodeURIComponent(username)}/repos?per_page=${per_page}&page=${page}&sort=updated`;
  const res = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'Portfolio-App',
      // If you want to include private repos or increase rate limits, add:
      // Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  });

  if (res.status === 403) {
    throw new Error('RATE_LIMIT');
  }
  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText);
    throw new Error(`GitHub API error: ${res.status} ${text}`);
  }
  return res.json();
}

/* Fallback placeholder data for any missing projects */
const FALLBACK_MAP: Record<string, Repository> = {
  'aws-projects': {
    name: 'AWS-PROJECTS',
    description:
      "Welcome to my AWS Projects repository! Here, I've documented several projects that showcase my practical experience with Amazon Web Services (AWS).",
    html_url: 'https://github.com/charansai1432/AWS-PROJECTS',
    topics: ['AWS', 'Cloud'],
    homepage: '',
    created_at: new Date().toISOString(),
    fork: false,
    stargazers_count: 0,
    archived: false,
  },
  'docker-project': {
    name: 'Docker-Project',
    description: 'This repository contains my Docker Project showcasing containerization & deployment patterns.',
    html_url: 'https://github.com/charansai1432/Docker-Project',
    topics: ['Docker', 'DevOps'],
    homepage: '',
    created_at: new Date().toISOString(),
    fork: false,
    stargazers_count: 0,
    archived: false,
  },
  'imageobjectdetectionandrecognition': {
    name: 'Image-object-Detection-and-Recognition',
    description: 'Object detection and recognition project (RetinaNet / ResNet / CV pipelines).',
    html_url: 'https://github.com/charansai1432/Image-object-Detection-and-Recognition',
    topics: ['Python', 'Deep Learning', 'Computer Vision'],
    homepage: '',
    created_at: new Date().toISOString(),
    fork: false,
    stargazers_count: 0,
    archived: false,
  },
  'virtuhrcoach': {
    name: 'VirtuHR-Coach',
    description:
      'HR AI Recruiter project — interview preparation assistant integrating Gemini API for question generation.',
    html_url: 'https://github.com/charansai1432/VirtuHR-Coach',
    topics: ['React', 'AI', 'Gemini API'],
    homepage: '',
    created_at: new Date().toISOString(),
    fork: false,
    stargazers_count: 0,
    archived: false,
  },
  'certificateverification': {
    name: 'certificate-verification',
    description:
      'Employee verification system — automates credential verification and simplifies HR checks.',
    html_url: 'https://github.com/charansai1432/certificate-verification',
    topics: ['Full Stack', 'HR Tools'],
    homepage: '',
    created_at: new Date().toISOString(),
    fork: false,
    stargazers_count: 0,
    archived: false,
  },
  // 'predictionofcyberattacksusingml': {
  //   name: 'Prediction-of-cyber-attacks-using-ML',
  //   description: 'Cybersecurity ML project for predicting/detecting attacks using classification models.',
  //   html_url: 'https://github.com/charansai1432/Prediction-of-cyber-attacks-using-ML',
  //   topics: ['Python', 'Machine Learning', 'Cybersecurity'],
  //   homepage: '',
  //   created_at: new Date().toISOString(),
  //   fork: false,
  //   stargazers_count: 0,
  //   archived: false,
  // },
  'aistudybuddy': {
    name: 'AI-Study-Buddy',
    description: 'AI Study Buddy — an assistant using Gemini API, React frontend and Django backend. AI-powered study partner to help students learn effectively. Helps with explanations, quizzes, and study plans.',
    html_url: 'https://github.com/charansai1432/AI-study-App',
    topics: ['AI', 'React', 'Django', 'Gemini API'],
    homepage: '',
    created_at: new Date().toISOString(),
    fork: false,
    stargazers_count: 0,
    archived: false,
   },
  // 'iotbasedsmartgaragereporting': {
  //   name: 'IOT-based-smart-garage-reporting',
  //   description: 'IoT project that monitors garage occupancy using sensors and Python.',
  //   html_url: 'https://github.com/charansai1432/IOT-based-smart-garage-reporting',
  //   topics: ['IoT', 'Python', 'Sensors'],
  //   homepage: '',
  //   created_at: new Date().toISOString(),
  //   fork: false,
  //   stargazers_count: 0,
  //   archived: false,
  // },
  'pythonprojects': {
    name: 'Python-projects',
    description: 'Collection of Python mini-projects that demonstrate scripting, automation and data tasks.',
    html_url: 'https://github.com/charansai1432/Python-projects',
    topics: ['Python'],
    homepage: '',
    created_at: new Date().toISOString(),
    fork: false,
    stargazers_count: 0,
    archived: false,
  }
};

/* Main function: returns exactly SPECIFIC_PROJECTS (in that order) */
export const fetchGithubProjects = async (username: string): Promise<Repository[]> => {
  try {
    const perPage = 100;
    let page = 1;
    let allRepos: any[] = [];

    // fetch all pages
    while (true) {
      const data = await fetchPage(username, page, perPage);
      if (!Array.isArray(data) || data.length === 0) break;
      allRepos = allRepos.concat(data);
      if (data.length < perPage) break;
      page += 1;
    }

    // map normalized name => repo
    const map = new Map<string, Repository>();
    for (const r of allRepos) {
      const repo: Repository = {
        name: r.name,
        description: r.description ?? null,
        html_url: r.html_url,
        topics: Array.isArray(r.topics) ? r.topics : [],
        homepage: r.homepage ?? null,
        created_at: r.created_at ?? undefined,
        fork: !!r.fork,
        stargazers_count: r.stargazers_count ?? 0,
        archived: !!r.archived,
      };
      map.set(normalize(repo.name), repo);
    }

    // Build the final array in the SPECIFIC_PROJECTS order:
    const final: Repository[] = SPECIFIC_NORMALIZED.map((normName, idx) => {
      const found = map.get(normName);
      if (found) return found;
      // fallback placeholder (from FALLBACK_MAP) if available
      const fallback = FALLBACK_MAP[normName];
      if (fallback) return fallback;
      // last resort generic placeholder
      return {
        name: SPECIFIC_PROJECTS[idx],
        description: 'Project not available publicly. Placeholder used.',
        html_url: `https://github.com/${username}/${SPECIFIC_PROJECTS[idx]}`,
        topics: [],
        homepage: '',
        created_at: new Date().toISOString(),
        fork: false,
        stargazers_count: 0,
        archived: false,
      };
    });

    // Return exactly nine entries (no extras), in the exact SPECIFIC_PROJECTS order
    return final;
  } catch (err: any) {
    console.error('fetchGithubProjects error:', err);
    // On rate limit or network failure, return placeholders for all nine
    return SPECIFIC_NORMALIZED.map((normName, idx) => FALLBACK_MAP[normName] ?? {
      name: SPECIFIC_PROJECTS[idx],
      description: 'Project not available publicly. Placeholder used.',
      html_url: `https://github.com/charansai1432/${SPECIFIC_PROJECTS[idx]}`,
      topics: [],
      homepage: '',
      created_at: new Date().toISOString(),
      fork: false,
      stargazers_count: 0,
      archived: false,
    });
  }
};
