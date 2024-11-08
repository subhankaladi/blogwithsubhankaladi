"use client";

import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './main.css';
import SocialMedia from '../socialmedia/page';
import Link from 'next/link';

const Page = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
  };

  const handleProjectClick = () => {
    setShowProjects(true);

    // Close the project list automatically after 10 seconds
    setTimeout(() => {
      setShowProjects(false);
    }, 10000);
  };

  // Close the project list when clicking outside
 // Inside Page component
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest('.projects-menu')) {
    setShowProjects(false);
  }
};

useEffect(() => {
  document.addEventListener('click', handleClickOutside);
  return () => document.removeEventListener('click', handleClickOutside);
}, []);


  return (
    <div>
      <div className={`main-div ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="navbar-section">
          <h3 className="subhan-blog">SUBHAN <span> BLOG</span></h3>
          
          <ul>
            <li>Home</li>
            <li><Link href="/about">About</Link></li>
            <li
              onClick={handleProjectClick}
              className="projects-menu"
            >
              Projects <span className="arrow">&#9662;</span>
              {showProjects && (
                <div className="project-list">
                  <Link href="https://subhankaladiportfolio.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={() => setShowProjects(false)}>Personal Portfolio</Link>
                  <Link href="https://project-3-hbd-celebration.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={() => setShowProjects(false)}>HBD Celebration App</Link>
                  <Link href="https://project-5-calculator-app.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={() => setShowProjects(false)}>iOS Calculator</Link>
                  <Link href="https://subhan-kaladi.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={() => setShowProjects(false)}>GenAI Website</Link>
                </div>
              )}
            </li>
          </ul>

          <div className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? '🌞' : '🌙'}
          </div>
        </div>

        <div className="welcome-section">
          <h1>WELCOME TO</h1>
          <div className="typed-text">
            <Typewriter
              options={{
                strings: ['TECH BLOG', 'GenAI BLOG', 'Next.js15 BLOG', 'Cloud Computing BLOG'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        
      </div>
      <hr />
      <SocialMedia />
    </div>
  );
};

export default Page;
