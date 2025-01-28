import React from 'react';
import userImage from "../../assets/images/user.jpg";
import ActiveMembers from './ActiveMembers';
import RecentTopics from './RecentTopics';
import LatestActivities from './LatestActivities';
import ContactUs from './ContactUs';

const GeneralDiscussion = () => {

    const topics = [
        {
          id: 1,
          title: "Digital entertainment",
          starter: "Selena Kelleri",
          voices: 1,
          replies: 2,
          lastPost: {
            timeAgo: "6 days, 5 hours ago",
            author: "Selena Kelleri"
          },
        },
        {
          id: 2,
          title: "Community run event",
          starter: "Selena Kelleri",
          voices: 1,
          replies: 2,
          lastPost: {
            timeAgo: "1 week, 3 days ago",
            author: "Selena Kelleri"
          },
        },
        {
          id: 3,
          title: "Build information & know issues",
          starter: "Selena Kelleri",
          voices: 1,
          replies: 2,
          lastPost: {
            timeAgo: "1 month ago",
            author: "Selena Kelleri"
          },
        },
        {
          id: 4,
          title: "Content Creator",
          starter: "Selena Kelleri",
          voices: 1,
          replies: 2,
          lastPost: {
            timeAgo: "over 2 months ago",
            author: "Selena Kelleri"
          },
        },
      ]


    return (

        <div>

        <div className="grid grid-cols-12 p-6 gap-6">

        <div className="col-span-9 rounded-lg">

        <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-blue-900 mb-1">General Discussion</h1>
        <p className="text-sm text-gray-600">For all general discussions of Company</p>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mt-2">
          <a href="#" className="text-gray-600">
            Home
          </a>
          <span className="text-gray-400">/</span>
          <a href="#" className="text-gray-600">
            Forums
          </a>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900">General Discussion</span>
        </div>
      </div>

      {/* Search and Sort */}
      <div className="p-4 bg-white flex items-center justify-between mb-6 gap-4 rounded-md">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search topic..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Order By:</span>
          <select className="text-sm border rounded-lg px-3 py-2">
            <option>Newest</option>
            <option>Oldest</option>
            <option>Most Replies</option>
          </select>
        </div>
      </div>

      {/* Topics List */}
      <div className="rounded-lg mb-6">
        {/* Table Header */}
        <div className="grid grid-cols-[1fr,100px,100px,200px] gap-4 p-4 border-b text-sm font-medium" style={{backgroundColor: "#142d6f", color: "white"}}>
          <div>TOPIC</div>
          <div className="text-center">VOICES</div>
          <div className="text-center">REPLIES</div>
          <div>LAST POST</div>
        </div>

        {/* Table Body */}
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="grid grid-cols-[1fr,100px,100px,200px] gap-4 p-4 border-b last:border-0"
          >
            <div>
              <a href="#" className="text-blue-600 font-medium">
                {topic.title}
              </a>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-gray-500">Started by</span>
                <a href="#" className="text-sm text-blue-600">
                  {topic.starter}
                </a>
              </div>
            </div>
            <div className="text-center text-gray-600">{topic.voices}</div>
            <div className="text-center text-gray-600">{topic.replies}</div>
            <div className="flex gap-3">
              <img
                src={userImage}
                alt={topic.lastPost.author}
                className="w-6 h-6 rounded-full"
              />
              <div>
                <a href="#" className="text-sm text-blue-600 block">
                  {topic.lastPost.author}
                </a>
                <span className="text-xs text-gray-500">{topic.lastPost.timeAgo}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create New Topic Form */}
      <div className=" rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Create New Topic in "Art & Entertainment Forum"</h2>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Topic Title (Maximum Length: 80)"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Rich Text Editor */}
          <div className="border rounded-lg">
            <div className="border-b p-2 flex gap-2">
              <button type="button" className="p-1 rounded">
                <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
              <button type="button" className="p-1 rounded font-bold">
                B
              </button>
              <button type="button" className="p-1 rounded italic">
                I
              </button>
              <button type="button" className="p-1 rounded underline">
                U
              </button>
              {/* Add more editor buttons as needed */}
            </div>
            <textarea rows={8} className="w-full p-4 focus:outline-none" placeholder="Your text here" />
          </div>

          {/* Topic Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Topic Tags</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Notification Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="notifications"
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="notifications" className="text-sm text-gray-600">
              Notify me of follow-up replies via email
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium">
            Submit
          </button>
        </form>
        </div>
        </div>

        </div>    

        <div className="col-span-3 rounded-lg">

            <div className='flex justify-end mt-12'>
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium">
            Unsubscribe
          </button>
            </div>
            <div className='mt-3'><ActiveMembers/></div>
            <div className='mt-8'><RecentTopics/></div>
            <div className='mt-8'><LatestActivities/></div>
            <div className='mt-8'><ContactUs/></div>

        </div>   

        </div>
            
        </div>
    );
};

export default GeneralDiscussion;