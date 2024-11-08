"use client";

import './next.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../footer/page';
import Image from 'next/image';

interface NewsArticle {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

const NextBlog = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'Next.js Blog',
            pageSize: 8,
            apiKey: 'f02ab78ce0284cea93ee8a265203609d', // Replace with a valid API key
            language: 'en'
          }
        });

        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error fetching news:', error.message);
        } else {
          console.error('Unexpected error:', error);
        }
        setLoading(false);
      }
    };

     fetchNews() 
    fetchNews();

    // Temporary mock data to verify rendering
    setNews([
      { 
        title: "Test Article 1", 
        description: "This is a test description for article 1.", 
        urlToImage: "https://via.placeholder.com/1024x576", 
        url: "https://example.com"
      },
      { 
        title: "Test Article 2", 
        description: "This is a test description for article 2.", 
        urlToImage: "https://via.placeholder.com/1024x576", 
        url: "https://example.com"
      },
    ]);
    setLoading(false);

  }, []);

  return (
    <div>
      <h1 className='genai'><span>Welcome To Next.js Latest News</span></h1>
      <div className="social-div">
        {loading ? (
          <div className="loading">Loading news...</div>
        ) : (
          news.map((article, index) => (
            <div key={index} className="card">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <Image 
                  src={article.urlToImage || '/fallback-image.jpg'} // Fallback image if urlToImage is null
                  alt="news" 
                  className="card-img" 
                  width={1024} 
                  height={576}  
                ></Image>
                <div className="card-content">
                  <h2 className="card-title">{article.title}</h2>
                  <p className="card-description">{article.description}</p>
                </div>
              </a>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}

export default NextBlog;
