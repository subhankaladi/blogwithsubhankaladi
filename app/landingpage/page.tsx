"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import './landing.css';

export default function LandingPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // New state for name
  const [username, setUsername] = useState(''); // New state for username
  const [savedEmail, setSavedEmail] = useState('test@example.com');
  const [savedPassword, setSavedPassword] = useState('password123');
  const [error, setError] = useState('');
  const router = useRouter();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
    setEmail('');
    setPassword('');
    setName('');
    setUsername('');
  };

  const handleSignup = () => {
    if (!email || !password || !name || !username) {
      setError('Please enter all fields.');
      return;
    }
    setSavedEmail(email);
    setSavedPassword(password);
    setIsLogin(true); 
    setError('');
  };

  const handleLogin = () => {
    if (email === savedEmail && password === savedPassword) {
      setError('');
      setTimeout(() => {
        router.push('/main');
      }, 500);
    } else {
      setError('Invalid login credentials. Please sign up first.');
    }
  };

  return (
    <div className="container">
      {isLogin ? (
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          exit={{ x: '100vw' }}
          transition={{ duration: 0.5 }}
          className="form-container"
        >
          <h2>Welcome to BLOGSITE</h2>
          <p>We make it for you</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  
          />
          {error && <p className="error-text">{error}</p>}
          <button onClick={handleLogin} className="submit-btn">Sign In</button>
          <p className="toggle-text" onClick={toggleForm}>Don't have an account? Sign Up</p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          exit={{ x: '-100vw' }}
          transition={{ duration: 0.5 }}
          className="form-container"
        >
          <h2>Sign up to BLOGSITE</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Managing the name input
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Managing the username input
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  
          />
          {error && <p className="error-text">{error}</p>}
          <button onClick={handleSignup} className="submit-btn">Sign Up</button>
          <p className="toggle-text" onClick={toggleForm}>Already have an account? Sign In</p>
        </motion.div>
      )}
    </div>
  );
}
