import React from 'react';
import userImage from "../../assets/images/user.jpg";

const LeaderBoard = () => {
    return (
        <div className="mb-8">
            <h3 className="font-semibold mb-4">Leaderboard</h3>
            <div className="space-y-4">
              {[
                { rank: '#1', name: 'Scott Smith', points: '54300 points' },
                { rank: '#2', name: 'Sarah Jayne', points: '47600 points' },
                { rank: '#3', name: 'Marc Vandeweer', points: '45100 points' },
                { rank: '#4', name: 'Kristin Watson', points: '34300 points' },
                { rank: '#5', name: 'Scott Smith', points: '56300 points' }
              ].map((user, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">{user.rank}</span>
                  <img src={userImage} alt={user.name} className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.points}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
    );
};

export default LeaderBoard;