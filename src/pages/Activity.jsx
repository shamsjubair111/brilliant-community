import React, { useState } from 'react';
import userImage from "../assets/images/user.jpg";

const Activity = () => {

    const [postText, setPostText] = useState('');

    return (
        <div className="flex gap-6 p-6">
        {/* Left Column */}
        <div className="w-72">
          {/* Birthday Card */}
          <div className="bg-blue-500 rounded-lg p-6 text-white mb-8 relative">
            <div className="absolute top-0 right-0">
              <div className="relative">
                <div className="absolute -top-2 -left-12">
                 
                </div>
              </div>
            </div>
            <img 
              src={userImage}
              alt="Birthday" 
              className="rounded-full mb-3"
            />
            <h3 className="text-lg font-semibold mb-1">Maya's birthday is May 17</h3>
            <p className="text-sm opacity-90 mb-4">Write a birthday message with your best wishes on his profile</p>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium">
              Send Greeting
            </button>
          </div>
  
          {/* Leaderboard */}
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
  
          {/* Trending Hashtags */}
          <div>
            <h3 className="font-semibold mb-3">Trending Hashtags</h3>
            <div className="flex flex-wrap gap-2">
              {['#basic', '#trending', '#motivation', '#stories', '#lifestyle'].map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
  
        {/* Middle Column - Main Feed */}
        <div className="flex-1">

      
        
          <div className="rounded-lg shadow-sm">
            {/* Header */}
            <div className="border-b px-4">
              <div className="flex justify-between items-center mb-4">
               
              </div>
              {/* Profile Images Row */}
              <div className="flex">
                {[...Array(7)].map((_, i) => (
                 <div className='m-2'>
                     <img
                    key={i}
                    src={userImage}
                    alt={`User ${i + 1}`}
                    className="w-20 h-20 rounded-full border-2 mr-3" style={{borderColor: "#142d6f"}}
                  />
                  <p className='mt-2'>{i === 0 ? "Your story" : "Randy Orton"}</p>
                </div>
                ))}
              </div>
            </div>

            <div className='ml-4 mt-8'>
            <h1 className="text-3xl font-bold mb-1" style={{color: "#142d6f"}}>Amazing Newsfeed</h1>
            <p className="text-sm text-gray-500 mb-4" style={{color: "#142d6f"}}>Check what your friends have been up to!</p>
            </div>
  
            {/* Post Creation */}
            <div className="bg-white p-4 border-b rounded-xl mx-5">
              <div className="flex gap-3 mb-4">
                <img src={userImage} alt="Profile" className="w-10 h-10 rounded-full" />
                <div className="flex-1">
                  <div className="items-center gap-2 mb-2">
                    <p className="font-medium mb-1">Jessica CJ</p>
                    <p className="text-sm text-gray-500">Status update</p>
                  </div>
                  <input
                    style={{position: "relative", right: "50px", width: "106%"}}
                    type="text"
                    placeholder="What's new, here?"
                    className="w-full border rounded-lg px-4 py-2 my-4"
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                  />
                </div>
              </div>


              <div className="flex justify-between items-center mt-8">
                <div className="gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <div>
                <button className="px-6 py-2 bg-white rounded-lg" style={{color: "#142d6f"}}>
                  Discard
                </button>
                <button className="px-6 py-2 bg-blue-900 text-white rounded-full">
                  Post
                </button>
                </div>
              </div>
            </div>
  
            {/* RSS Feed Section */}
            <div className="bg-white p-4 border-b m-5 rounded-xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.18 15.64a2.18 2.18 0 112.18 2.18 2.18 2.18 0 01-2.18-2.18zM4 4.44A15.56 15.56 0 0119.56 20h-2.83A12.73 12.73 0 004 7.27V4.44zm0 5.66a9.9 9.9 0 019.9 9.9h-2.83A7.07 7.07 0 004 12.93V10.1z"/>
                  </svg>
                  <span className="font-medium">RSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Show:</span>
                  <button className="text-sm text-gray-700">Everything</button>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
  
            {/* Feed Posts */}
            {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="bg-white divide-y m-5 rounded-xl"
        >
          {/* Quote Post */}
          <div className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <img src={userImage} alt="Sarah" className="w-10 h-10 rounded-full" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Sarah Jayne</span>
                  <span className="text-sm text-gray-500">posted an update in the group</span>
                  <span className="text-blue-600">Art & Entertainment</span>
                </div>
                <span className="text-sm text-gray-500">2 weeks ago</span>
              </div>
            </div>
            <div
              className="p-6 rounded-lg mb-4 flex flex-col justify-center items-end"
              style={{ backgroundColor: "#8484fe", height: "300px" }}
            >
              <p className="text-lg mb-2 text-white font-bold text-4xl">
                "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more."
              </p>
              <p className="text-white mt-4">-Angelita Lim</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  <span className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full">
                    👍
                  </span>
                  <span className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full">
                    ❤️
                  </span>
                </div>
                <span className="text-sm text-gray-500">and 4 others</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <button className="text-gray-500">0 comments</button>
                <button className="text-blue-600">Share</button>
              </div>
            </div>
          </div>
        </div>
      ))}

          </div>
        </div>
  
        {/* Right Column */}
        <div className="w-72">
          {/* Active Members */}
          <div className="mb-8">
            <h3 className="font-semibold mb-3">Active members</h3>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={userImage}
                  alt={`Member ${i + 1}`}
                  className="w-8 h-8 rounded-full mr-1"
                />
              ))}
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                +3
              </div>
            </div>
          </div>
  
          {/* Groups */}
          <div className="mb-8">
            <h3 className="font-semibold mb-4">Groups</h3>
            <div className="space-y-4">
              {[
                { name: 'B2B Business', members: '12M' },
                { name: 'Marketing campaign', members: '17M' },
                { name: 'Design Secret', members: '9.5M' },
                { name: 'Developer', members: '614K' }
              ].map((group, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={userImage} alt={group.name} className="w-10 h-10 rounded-lg" />
                    <div>
                      <p className="font-medium">{group.name}</p>
                      <p className="text-sm text-gray-500">{group.members}</p>
                    </div>
                  </div>
                  <button className="text-blue-600 text-sm font-medium">Join</button>
                </div>
              ))}
            </div>
          </div>
  
          {/* Recent Topics */}
          <div>
            <h3 className="font-semibold mb-3">Recent Topics</h3>
            <div className="space-y-2">
              {[
                'Aerial exercise challenge',
                'Open API GPT-4s having a conversation with audio',
                'Best Practices for Great Landing Pages',
                'Release an Official Crypto Mobile App'
              ].map((topic, index) => (
                <p key={index} className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                  {topic}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Activity;