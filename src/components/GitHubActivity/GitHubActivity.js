import React, { useState, useEffect } from 'react';
import './GitHubActivity.css';

const GitHubActivity = () => {
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Using mock data since GitHub API might require auth
    const mockActivity = [
      { type: 'PushEvent', repo: { name: 'asmeret/portfolio' }, date: '2 hours ago' },
      { type: 'CreateEvent', repo: { name: 'asmeret/ai-music-player' }, date: '1 day ago' },
      { type: 'WatchEvent', repo: { name: 'facebook/react' }, date: '2 days ago' },
      { type: 'PushEvent', repo: { name: 'asmeret/task-manager' }, date: '3 days ago' },
    ];
    
    setActivity(mockActivity);
    setLoading(false);
  }, []);

  if (loading) return <div className="github-activity loading">Loading activity...</div>;

  return (
    <div className="github-activity">
      <h3>📊 Recent Activity</h3>
      <div className="activity-list">
        {activity.map((event, index) => (
          <div key={index} className="activity-item">
            <div className="activity-type">{getActivityIcon(event.type)}</div>
            <div className="activity-details">
              <span className="activity-repo">{event.repo.name}</span>
              <span className="activity-date">{event.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getActivityIcon = (type) => {
  const icons = {
    PushEvent: '⬆️',
    CreateEvent: '🆕',
    WatchEvent: '⭐',
    ForkEvent: '🍴'
  };
  return icons[type] || '📝';
};

export default GitHubActivity;