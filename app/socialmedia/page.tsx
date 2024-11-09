"use client";

import React from 'react';
import NextBlog from '../nextblog/page';
import './social.css';

const SocialMedia = () => {
  const cardsData = [
    {
      image: '/ceo.png',
      title: 'Nvidia is nearing a record high. This is what&apos;s driving it.',
      description: 'Nvidia&apos;s stock surged 24% in a month, driven by OpenAI&apos;s $6.6 billion funding and ongoing demand for AI computing, signaling renewed confidence in AI.',
      link: 'https://www.businessinsider.com/nvidia-stock-nears-all-time-high-after-openai-funding-2024-10'
    },
    {
      image: '/graph.png',
      title: 'Nvidia makes 7 tech announcements in Washington D.C. as antitrust looms',
      description: 'Nvidia showed tech in the nation&apos;s capital at its AI Summit to help educate the government at a time when Nvidia is facing an antitrust probe.',
      link: 'https://venturebeat.com/ai/nvidia-showcases-tech-in-washington-d-c-as-antitrust-looms/'
    },
    {
      image: '/ceo2.png',
      title: 'Nvidia to replace Intel in Dow Jones Industrial Average',
      description: 'Once the dominant force in chipmaking, Intel has in recent years ceded its manufacturing edge to rival TSMC and missed out on the generative artificial...',
      link: 'https://finance.yahoo.com/news/nvidia-replace-intel-dow-jones-212628000.html'
    },
    {
      image: '/OIP.jpg',
      title: 'This staid software company is kicking butt in AI. The CEO explains how.',
      description: 'ServiceNow is succeeding where other sexier AI companies are struggling: Getting customers to pay up.',
      link: 'https://www.businessinsider.com/servicenow-ceo-bill-mcdermott-ai-software-2024-10'
    },
    {
      image: '/nextjs.jpg',
      title: 'Next.js 15',
      description: 'Next.js 15 Next.js 15 is officially stable and ready for production. This release builds on the updates from both RC1 and RC2. We ve focused heavily on stability while adding some exciting updates we think you ll love. Try Next.js 15 today: # Use the new automated upgra…',
      link: 'https://nextjs.org/blog/next-15'
    },
    {
      image: '/git.png',
      title: 'Octoverse: AI leads Python to top language as the number of global developers surges',
      description: 'In this years Octoverse report, we study how public and open source activity on GitHub shows how AI is expanding as the global developer community surges in size. The post Octoverse: AI leads Python to top language as the number of global developers surges …',
      link: 'https://github.blog/news-insights/octoverse/octoverse-2024/'
    },
    {
      image: '/rc.jpg',
      title: 'Next.js 15 RC 2',
      description: 'Following the announcement of the first Next.js 15 Release Candidate back in May, we ve been preparing a second Release Candidate based on your feedback. Heres what we ve been working on: @next/codemod upgrade: Easily upgrade to the latest Next.js and React …',
      link: 'https://nextjs.org/blog/next-15-rc2'
    },
    {
      image: '/R.png',
      title: 'This Prompt Can Make an AI Chatbot Identify and Extract Personal Details From Your Chats',
      description: 'Security researchers created an algorithm that turns a malicious prompt into a set of hidden instructions that could send a user’s personal information to an attacker.',
      link: 'https://react.dev/https://www.wired.com/story/ai-imprompter-malware-llm/'
    }
  ];

  return (
    <div className="mainsocial">
      <h2 className="header">Generative AI & Next.js 15 Latest News</h2>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <a key={index} href={card.link} target="_blank" rel="noopener noreferrer" className="card">
            <img src={card.image} alt={card.title} className="card-image" />
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </a>
        ))}
      </div>
      <NextBlog />
    </div>
  );
};

export default SocialMedia;
