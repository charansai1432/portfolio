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
    items: ["JavaScript",  "Python" ,"Django", "Java"]
  },
  {
    icon: Globe,
    title: "Web Technologies",
    items: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap", "Next.js"]
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
    icon: Cloud,
    title: "Hosting Platforms",
    items: [
      "Netlify",  "Render" , "Hostinger"
    ]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    items: [
      "Nmap","Wireshark"
    ]
  },
  {
    icon: Terminal,
    title: "Development Tools",
    items: ["Git", "Docker", "Linux"]
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "MongoDB"]
  }
];


