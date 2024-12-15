import { Code, Cloud, Shield, Database, Terminal, Globe } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface SkillCategory {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export const skillsData: SkillCategory[] = [
  {
    icon: Code,
    title: "Programming Languages",
    items: ["JavaScript",  "Python",  "HTML", "CSS"]
  },
  {
    icon: Globe,
    title: "Web Technologies",
    items: ["React.js", "Node.js", "Express.js", "RESTful APIs", "GraphQL"]
  },
  {
    icon: Cloud,
    title: "AWS Cloud",
    items: [
      "EC2 Instance",
      "S3 Bucket",
      "VPC",
      "Lambda",
      "IAM",
      "Cloud Watch",
      "AWS Amplify",
      "AWS cognito"
    ]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    items: [
      "Offensive and Defensive Tools"
    ]
  },
  {
    icon: Terminal,
    title: "Development Tools",
    items: ["Git", "Docker", "VS Code", "Postman", "Linux"]
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "MongoDB"]
  }
];