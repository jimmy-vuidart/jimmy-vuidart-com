// src/data/resume-data.ts
// Centralized resume data for use across the application

// Define types for resume data
export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
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

// Resume data
export const resumeData = {
  name: "Jimmy VUIDART",
  title: "Web Developer & Designer",
  professionalSummary: "Experienced web developer and designer with a passion for creating modern, responsive, and user-friendly digital experiences. Skilled in front-end and back-end technologies with a strong focus on delivering high-quality solutions that meet business objectives.",
  
  workExperience: [
    {
      title: "Senior Web Developer",
      company: "Digital Solutions Inc.",
      period: "2020 - Present",
      description: "Lead developer for enterprise web applications, managing a team of 5 developers. Implemented modern front-end architecture using React and TypeScript, resulting in a 40% improvement in application performance.",
      achievements: [
        "Redesigned the company's flagship product, improving user engagement by 35%",
        "Implemented CI/CD pipelines, reducing deployment time by 60%",
        "Mentored junior developers, improving team productivity by 25%"
      ]
    },
    {
      title: "Web Developer",
      company: "Creative Web Agency",
      period: "2017 - 2020",
      description: "Developed responsive websites and web applications for various clients across different industries. Worked with a team of designers and developers to deliver high-quality solutions on time and within budget.",
      achievements: [
        "Developed over 30 client websites using modern web technologies",
        "Implemented SEO best practices, improving client search rankings by an average of 40%",
        "Created a reusable component library that reduced development time by 30%"
      ]
    },
    {
      title: "Junior Developer",
      company: "Tech Startups Ltd.",
      period: "2015 - 2017",
      description: "Assisted in the development of web applications and websites for early-stage startups. Collaborated with cross-functional teams to implement features and fix bugs.",
      achievements: [
        "Contributed to 5 successful product launches",
        "Developed and maintained documentation for internal tools",
        "Implemented responsive designs that improved mobile user experience"
      ]
    }
  ],
  
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Tech University",
      period: "2013 - 2015",
      description: "Specialized in Web Technologies and Human-Computer Interaction. Graduated with honors."
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "State University",
      period: "2009 - 2013",
      description: "Focused on Software Development and Database Management. Participated in various hackathons and coding competitions."
    }
  ],
  
  skills: [
    { category: "Programming Languages", items: ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "PHP"] },
    { category: "Frameworks & Libraries", items: ["React", "Vue.js", "Angular", "Node.js", "Express", "Astro", "Next.js"] },
    { category: "Tools & Technologies", items: ["Git", "Docker", "AWS", "Firebase", "GraphQL", "REST APIs", "Webpack", "Vite"] },
    { category: "Design & UI/UX", items: ["Figma", "Adobe XD", "Tailwind CSS", "SASS/SCSS", "Responsive Design", "Accessibility Standards"] }
  ],
  
  certifications: [
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2022"
    },
    {
      title: "Professional Web Developer Certification",
      issuer: "Web Development Institute",
      date: "2020"
    },
    {
      title: "Google UX Design Professional Certificate",
      issuer: "Google",
      date: "2019"
    }
  ],

  contact: {
    email: "contact@JimmyVUIDART.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA"
  }
};

export default resumeData;