import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './GitHubActivity.css';

const GitHubActivity = () => {
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [username] = useState('asmeretteklu'); // Your GitHub username
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  useEffect(() => {
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const now = new Date();
      const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
      
      if (diffInHours < 1) return 'Just now';
      if (diffInHours < 24) return `${diffInHours} hours ago`;
      if (diffInHours < 168) return `${Math.floor(diffInHours / 24)} days ago`;
      return `${Math.floor(diffInHours / 168)} weeks ago`;
    };

    const getMockData = () => {
      const mockActivity = [
        { 
          type: 'PushEvent', 
          repo: { name: 'asmeretteklu/portfolio' }, 
          date: '2 hours ago',
          commit: 'Fixed mobile navigation and added animations',
          url: 'https://github.com/asmeretteklu/portfolio'
        },
        { 
          type: 'CreateEvent', 
          repo: { name: 'asmeretteklu/ai-music-player' }, 
          date: '1 day ago',
          commit: 'Initial project setup and basic functionality',
          url: 'https://github.com/asmeretteklu/ai-music-player'
        },
        { 
          type: 'WatchEvent', 
          repo: { name: 'facebook/react' }, 
          date: '2 days ago',
          commit: 'Starred repository',
          url: 'https://github.com/facebook/react'
        },
        { 
          type: 'PushEvent', 
          repo: { name: 'asmeretteklu/task-manager' }, 
          date: '3 days ago',
          commit: 'Added task filtering and search functionality',
          url: 'https://github.com/asmeretteklu/task-manager'
        },
        { 
          type: 'ForkEvent', 
          repo: { name: 'vercel/next.js' }, 
          date: '4 days ago',
          commit: 'Forked repository for learning',
          url: 'https://github.com/vercel/next.js'
        },
        { 
          type: 'PushEvent', 
          repo: { name: 'asmeretteklu/weather-app' }, 
          date: '1 week ago',
          commit: 'Improved weather data caching',
          url: 'https://github.com/asmeretteklu/weather-app'
        },
      ];
      return mockActivity;
    };

    const fetchGitHubActivity = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Try to fetch real GitHub data first
        const response = await fetch(`https://api.github.com/users/${username}/events`);
        
        if (response.ok) {
          const data = await response.json();
          const formattedActivity = data.slice(0, 6).map(event => ({
            type: event.type,
            repo: event.repo,
            date: formatDate(event.created_at),
            commit: event.payload?.commits?.[0]?.message,
            url: `https://github.com/${event.repo.name}`
          }));
          setActivity(formattedActivity);
        } else {
          // Fallback to mock data if API fails
          console.log('GitHub API failed, using mock data');
          setActivity(getMockData());
        }
      } catch (err) {
        console.log('Using mock data due to:', err.message);
        setActivity(getMockData());
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubActivity();
  }, [username]);

  if (loading) {
    return (
      <motion.div 
        className="github-activity"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px", threshold: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="activity-header">
          <h3>📊 GitHub Activity</h3>
          <span className="github-username">@{username}</span>
        </div>
        <motion.div 
          className="loading-state"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="loading-spinner"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p>Loading recent activity...</p>
        </motion.div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div 
        className="github-activity error"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="activity-header">
          <h3>📊 GitHub Activity</h3>
        </div>
        <motion.div 
          className="error-state"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>Unable to load activity data</p>
          <motion.button 
            onClick={() => window.location.reload()} 
            className="retry-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Again
          </motion.button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="github-activity"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="activity-header"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3>📊 GitHub Activity</h3>
        <span className="github-username">@{username}</span>
      </motion.div>
      
      <motion.div 
        className="activity-stats"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="stat"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="stat-number">{activity.length}</span>
          <span className="stat-label">Recent Events</span>
        </motion.div>
        <motion.div 
          className="stat"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="stat-number">
            {activity.filter(a => a.type === 'PushEvent').length}
          </span>
          <span className="stat-label">Commits</span>
        </motion.div>
      </motion.div>

      <motion.div 
        className="activity-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {activity.map((event, index) => (
          <motion.a 
            key={index} 
            className="activity-item"
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ 
              y: -5,
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <motion.div 
              className="activity-icon"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {getActivityIcon(event.type)}
            </motion.div>
            <div className="activity-content">
              <div className="activity-main">
                <span className="activity-repo">{event.repo.name}</span>
                <span className="activity-date">{event.date}</span>
              </div>
              {event.commit && (
                <motion.p 
                  className="activity-commit" 
                  title={event.commit}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {event.commit.length > 60 
                    ? event.commit.substring(0, 60) + '...' 
                    : event.commit
                  }
                </motion.p>
              )}
              <motion.span 
                className="activity-type-label"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {getActivityLabel(event.type)}
              </motion.span>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.div 
        className="activity-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.a 
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-btn"
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          View Full Profile →
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

const getActivityIcon = (type) => {
  const icons = {
    PushEvent: '💾',
    CreateEvent: '🆕',
    WatchEvent: '⭐',
    ForkEvent: '🍴',
    IssuesEvent: '🐛',
    PullRequestEvent: '🔀',
    DeleteEvent: '🗑️',
    PublicEvent: '🌐'
  };
  return icons[type] || '📝';
};

const getActivityLabel = (type) => {
  const labels = {
    PushEvent: 'Pushed commits',
    CreateEvent: 'Created repository',
    WatchEvent: 'Starred repository',
    ForkEvent: 'Forked repository',
    IssuesEvent: 'Opened issue',
    PullRequestEvent: 'Opened pull request',
    DeleteEvent: 'Deleted',
    PublicEvent: 'Made public'
  };
  return labels[type] || 'Activity';
};

export default GitHubActivity;