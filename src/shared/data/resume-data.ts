// src/data/resume-data.ts
// Centralized resume data for use across the application
import resumeJson from '../../../data/reactive_resume-cm9y3onk32kw5q9p3b1739swk.json';

// Define types for resume data
export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

// Helper function to extract achievements from HTML summary
function extractAchievementsFromHtml(html: string): string[] {
  // Simple extraction of list items from HTML
  const achievements: string[] = [];
  const liMatches = html.match(/<li><p>(.*?)<\/p><\/li>/g);

  if (liMatches) {
    liMatches.forEach(match => {
      const content = match.replace(/<li><p>/, '').replace(/<\/p><\/li>/, '');
      achievements.push(content);
    });
  }

  return achievements;
}

// Helper function to extract skills from HTML summary
function extractSkillsFromHtml(html: string): string[] {
  const skills: string[] = [];

  // Look for technology stacks in the format "Technology1 | Technology2 | Technology3"
  const techStackMatches = html.match(/([A-Za-z0-9+#]+(\s[A-Za-z0-9+#]+)*(\s\d+)?(\+[A-Za-z0-9]+)?)(\s\|\s[A-Za-z0-9+#]+(\s[A-Za-z0-9+#]+)*(\s\d+)?(\+[A-Za-z0-9]+)?)+/g);

  if (techStackMatches) {
    techStackMatches.forEach(match => {
      // Split by pipe and trim whitespace
      const techItems = match.split('|').map(item => item.trim());
      skills.push(...techItems);
    });
  }

  return [...new Set(skills)]; // Remove duplicates
}

// Transform JSON data to match our expected structure
export const resumeData = {
  name: resumeJson.basics.name,
  title: resumeJson.basics.headline,
  professionalSummary: "Senior Frontend Engineer with extensive experience in Angular, React, and Node.js. Passionate about creating modern, responsive, and user-friendly web applications.",

  workExperience: resumeJson.sections.experience.items.map(job => ({
    title: job.position || job.company.split(' - ')[1] || '',
    company: job.company.split(' - ')[0] || job.company,
    period: job.date,
    description: job.summary ? job.summary.replace(/<\/?[^>]+(>|$)/g, "").split('<ul>')[0] : '',
    achievements: extractAchievementsFromHtml(job.summary || ''),
    skills: extractSkillsFromHtml(job.summary || '')
  })),

  education: resumeJson.sections.education.items.map(edu => ({
    degree: edu.area,
    institution: edu.institution,
    period: edu.date,
    description: edu.summary || `${edu.area} at ${edu.institution}`
  })),

  // Group skills by level
  skills: [
    { 
      category: "Expert", 
      items: resumeJson.sections.skills.items
        .filter(skill => skill.level >= 5)
        .map(skill => skill.name)
    },
    { 
      category: "Advanced", 
      items: resumeJson.sections.skills.items
        .filter(skill => skill.level >= 3 && skill.level < 5)
        .map(skill => skill.name)
    },
    { 
      category: "Intermediate", 
      items: resumeJson.sections.skills.items
        .filter(skill => skill.level < 3)
        .map(skill => skill.name)
    },
    { 
      category: "Languages", 
      items: resumeJson.sections.languages.items
        .map(lang => `${lang.name}${lang.description ? ` (${lang.description})` : ''}`)
    }
  ],

  certifications: resumeJson.sections.certifications.items.map(cert => ({
    title: cert.name,
    issuer: cert.issuer || '',
    date: cert.date || ''
  })),

  contact: {
    email: resumeJson.basics.email,
    phone: resumeJson.basics.phone,
    location: resumeJson.basics.location
  }
};

export default resumeData;
