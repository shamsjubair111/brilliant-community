import React from 'react';
import userImage from "../../assets/images/user.jpg";
import ActiveMembers from './ActiveMembers';
import RecentTopics from './RecentTopics';
import LatestActivities from './LatestActivities';
import ContactUs from './ContactUs';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

const Forums = () => {

    const forums = [
        {
          id: 1,
          icon: "📌",
          name: "Welcome & Info",
          description: "Find out guidelines and all important information here",
          topics: 12,
          replies: 309,
          lastPost: {
            author: "Selena Keller",
            timeAgo: "1 week, 3 days ago"
          },
        },
        {
          id: 2,
          icon: "💬",
          name: "General Discussion",
          description: "General and discussions of Company",
          topics: 24,
          replies: 235,
          lastPost: {
            author: "Selena Keller",
            timeAgo: "1 day, 2 hours ago"
          },
        },
        {
          id: 3,
          icon: "🎯",
          name: "Guiding",
          description: "Post your guides with thoughts, tips and strategy advice",
          topics: 19,
          replies: 98,
          lastPost: {
            author: "Selena Keller",
            timeAgo: "1 week, 4 days ago"
          },
        },
        {
          id: 4,
          icon: "🏆",
          name: "Runner Club",
          description: "Share stories and stories from majors",
          topics: 8,
          replies: 325,
          lastPost: {
            author: "Selena Keller",
            timeAgo: "2 weeks, 1 day ago"
          },
        },
        {
          id: 5,
          icon: "💰",
          name: "Cost Lovers",
          description: "Providing essential tips and cost insights before any lifestyle decision",
          topics: 8,
          replies: 85,
          lastPost: {
            author: "Selena Keller",
            timeAgo: "2 weeks, 1 day ago"
          },
        },
        {
          id: 6,
          icon: "📢",
          name: "News and Announcements",
          description: "Announcements and Updates",
          topics: 6,
          replies: 325,
          lastPost: {
            author: "Selena Keller",
            timeAgo: "2 weeks, 1 day ago"
          },
        },
        {
          id: 7,
          icon: "❓",
          name: "Community Help & Questions",
          description: "Find answers and ask help",
          topics: 6,
          replies: 325,
          lastPost: {
            author: "Selena Keller",
            timeAgo: "2 weeks, 1 day ago"
          },
        },
        {
          id: 8,
          icon: "📚",
          name: "Study Tips",
          description: "Share how you can get advice from others on how to learn more effectively",
          topics: 6,
          replies: 325,
          lastPost: {
            author: "Selena Keller",
            timeAgo: "2 weeks, 1 day ago"
          },
        },
        {
          id: 9,
          icon: "💻",
          name: "General Tech Discussion",
          description: "General Tech Discussion",
          topics: 6,
          replies: 325,
          lastPost: {
            author: "Selena Keller",
            timeAgo: "2 weeks, 1 day ago"
          },
        },
        {
          id: 10,
          icon: "🏃",
          name: "Runner Club",
          description: "Share topics and stories from majors",
          topics: 6,
          replies: 325,
          lastPost: {
            author: "Selena Keller",
            timeAgo: "2 weeks, 1 day ago"
          },
        },
      ]

    return (

        <div>

        <div className='flex flex-col  items-center' style={{backgroundColor: "#4d4efe",height:"300px"}}>


        <h1 className='text-white text-4xl font-bold mb-2 mt-12'>Forums</h1>

        <p className='text-white mb-6'>Browse all the forums of the community!</p>

        <div className="flex w-full max-w-3xl items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        >
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
        </svg>
        <input
        type="text"
        placeholder="Search Forum"
        className="flex-1 border-0 bg-transparent text-sm focus:outline-none"
        />

        <button className="rounded-full bg-[#303030] px-6 py-2 text-sm text-white hover:bg-[#404040] focus:outline-none focus:ring-2 focus:ring-[#303030] focus:ring-offset-2">
        Search
        </button>
        </div>

        </div>


        <div className="grid grid-cols-12 p-6">
        {/* Left Column (9/12 space) */}
        <div className="col-span-9 rounded-lg">

        <div className="max-w-6xl mx-auto p-4">

            <p className='mb-4 text-gray-600'>Home / <span className='font-bold' style={{color: "#142d6f"}}>Forums</span></p>
     

      {/* Forum List */}
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Forum
            </th>
            <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
              Topics
            </th>
            <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
              Replies
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Last Post
            </th>
          </tr>
        </thead>
        <tbody className="">
          {forums.map((forum) => (
            <tr key={forum?.id || Math.random()} >
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="text-2xl flex-shrink-0">{forum?.icon}</div>
                  <div>
                    <h3 className="text-blue-600 font-medium">
                      <Link >{forum?.name}</Link>
                    </h3>
                    <p className="text-sm text-gray-600 mt-0.5">{forum?.description}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-900">
                {forum?.topics}
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-900">
                {forum?.replies}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <img
                    src={userImage}
                    alt={forum?.lastPost?.author || "User"}
                    className="w-8 h-8 rounded-full flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-blue-600 text-sm truncate">
                      {forum?.lastPost?.author}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {forum?.lastPost?.timeAgo}
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className='my-8'><Pagination/></div>
       
        </div>

        {/* Right Column (3/12 space) */}
        <div className="col-span-3 rounded-lg p-6">

            <div className='mt-3'><ActiveMembers/></div>

            <div className='mt-8'><RecentTopics/></div>

            <div className='mt-8'><LatestActivities/></div>

            <div className='mt-8'><ContactUs/></div>
            
        </div>
        </div>
            
        </div>
    );
};

export default Forums;