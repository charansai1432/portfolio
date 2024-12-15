export interface Repository {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  homepage: string;
  created_at: string;
  fork: boolean;
}