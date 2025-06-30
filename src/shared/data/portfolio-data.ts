// src/shared/data/portfolio-data.ts
// Portfolio data with example projects

import type { PortfolioData } from '../portfolio.model';

export const portfolioData: PortfolioData = {
  items: [
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Platform',
      summary: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes product management, shopping cart, user authentication, and payment processing.',
      image: 'https://placehold.co/800x600?text=E-Commerce+Platform',
      link: 'https://example.com/ecommerce',
      github: 'https://github.com/JimmyVUIDART/ecommerce-platform',
      date: '2023',
      isShowcased: true
    },
    {
      id: 'fitness-tracker',
      title: 'Fitness Tracker App',
      summary: 'Mobile application for tracking workouts, nutrition, and progress. Built with React Native and Firebase.',
      image: 'https://placehold.co/800x600?text=Fitness+Tracker+App',
      link: 'https://example.com/fitness',
      date: '2022'
    },
    {
      id: 'portfolio-website',
      title: 'Portfolio Website',
      summary: 'A responsive portfolio website built with Astro and Tailwind CSS. Features smooth animations and optimized performance.',
      image: 'https://placehold.co/800x600?text=Portfolio+Website',
      link: 'https://example.com/portfolio',
      github: 'https://github.com/JimmyVUIDART/portfolio-website',
      date: '2022'
    },
    {
      id: 'task-management',
      title: 'Task Management System',
      summary: 'A collaborative task management system with real-time updates. Built with Vue.js and Socket.io.',
      image: 'https://placehold.co/800x600?text=Task+Management+System',
      link: 'https://example.com/tasks',
      date: '2021'
    },
    {
      id: 'weather-app',
      title: 'Weather Application',
      summary: 'A weather forecast application that provides real-time weather data. Built with Angular and OpenWeatherMap API.',
      image: 'https://placehold.co/800x600?text=Weather+Application',
      date: '2021'
    },
    {
      id: 'blog-platform',
      title: 'Blog Platform',
      summary: 'A content management system for bloggers. Features markdown support, categories, and comments. Built with Next.js and Strapi.',
      image: 'https://placehold.co/800x600?text=Blog+Platform',
      link: 'https://example.com/blog',
      date: '2020'
    },
    {
      id: 'social-network',
      title: 'Social Network',
      summary: 'A social networking platform with profiles, posts, and messaging. Built with MERN stack (MongoDB, Express, React, Node.js).',
      image: 'https://placehold.co/800x600?text=Social+Network+App',
      link: 'https://example.com/social',
      github: 'https://github.com/JimmyVUIDART/social-network',
      date: '2020',
      isShowcased: true
    }
  ]
};

export default portfolioData;
