import React from 'react';
import LatestActivities from '../components/common/LatestActivities';
import ContactUs from '../components/common/ContactUs';
import BusinessPageHeader from '../components/common/BusinessPageHeader';
import news from "../assets/images/news.jpg";
import ActiveMembers from '../components/common/ActiveMembers';
import RecentTopics from '../components/common/RecentTopics';

const BusinessTopics = () => {

    const topics = [
        {
          id: 1,
          title: "Open AI's GPT-4s having a conversation with audio",
          author: {
            name: "Marc Vandeweer",
            avatar: "/placeholder.svg?height=24&width=24",
            verified: true,
          },
          voices: 2,
          replies: 2,
          lastPost: {
            timeAgo: "6 days, 9 hours ago",
            author: {
              name: "Sabina Kelleri",
              avatar: "/placeholder.svg?height=24&width=24",
              verified: true,
            },
          },
        },
        {
          id: 2,
          title: "Best Practices for Great Landing Pages",
          author: {
            name: "Marc Vandeweer",
            avatar: "/placeholder.svg?height=24&width=24",
            verified: true,
          },
          voices: 2,
          replies: 2,
          lastPost: {
            timeAgo: "1 week, 2 days ago",
            author: {
              name: "Sabina Kelleri",
              avatar: "/placeholder.svg?height=24&width=24",
              verified: true,
            },
          },
        },
        {
          id: 3,
          title: "Aerial exercise challenge",
          author: {
            name: "Marc Vandeweer",
            avatar: "/placeholder.svg?height=24&width=24",
            verified: true,
          },
          voices: 2,
          replies: 2,
          lastPost: {
            timeAgo: "1 month ago",
            author: {
              name: "Sabina Kelleri",
              avatar: "/placeholder.svg?height=24&width=24",
              verified: true,
            },
          },
        },
        {
          id: 4,
          title: "Releases on Official Crypto Mobile App",
          author: {
            name: "Marc Vandeweer",
            avatar: "/placeholder.svg?height=24&width=24",
            verified: true,
          },
          voices: 2,
          replies: 2,
          lastPost: {
            timeAgo: "1 year, 2 months ago",
            author: {
              name: "Sabina Kelleri",
              avatar: "/placeholder.svg?height=24&width=24",
              verified: true,
            },
          },
        },
      ]

    return (

        <div>

            <BusinessPageHeader/>

          


        {/* Grid */}

        <div className="grid grid-cols-12 p-6">

        <div className="col-span-9" style={{position: "relative", top: "-75px"}}>

        <div className="max-w-5xl mx-auto p-4">
      {/* Search and Sort Header */}
      <div className="bg-white p-4 rounded-md flex items-center justify-between mb-6 gap-4">
        <div className="relative flex-1">
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

      <div>
        <p className='font-bold mb-4' style={{color: "#142d6f"}}>This forum has 4 topics, and was updated 6 days 9 hous ago by Randy Orton</p>
      </div>

      {/* Topics List */}
      <div className="rounded-lg mb-6">
        {/* Table Header */}
        <div className="grid grid-cols-[1fr,100px,100px,200px] gap-4 p-4 border-b text-sm font-medium text-white" style={{backgroundColor: "#142d6f"}}>
          <div>TOPIC</div>
          <div className="text-center">VOICES</div>
          <div className="text-center">REPLIES</div>
          <div>LAST POST</div>
        </div>

        {/* Table Body */}
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="grid grid-cols-[1fr,100px,100px,200px] gap-4 p-4 border-b"
          >
            <div>
              <div className="flex gap-3">
                <img src={news} alt="" className="w-6 h-6 rounded-full" />
                <div>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    {topic.title}
                  </a>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-sm text-gray-500">Started by</span>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                      {topic.author.name}
                      {topic.author.verified && (
                        <svg className="w-4 h-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          />
                        </svg>
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center text-gray-600">{topic.voices}</div>
            <div className="text-center text-gray-600">{topic.replies}</div>
            <div className="flex gap-3">
              <img src={news} alt="" className="w-6 h-6 rounded-full" />
              <div>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  {topic.lastPost.author.name}
                  {topic.lastPost.author.verified && (
                    <svg className="w-4 h-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      />
                    </svg>
                  )}
                </a>
                <span className="text-xs text-gray-500 block">{topic.lastPost.timeAgo}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create New Topic Form */}
      <div className="rounded-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Create New Topic in "B2B Business"</h2>
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
              <button type="button" className="p-1 hover:bg-gray-100 rounded">
                B
              </button>
              <button type="button" className="p-1 hover:bg-gray-100 rounded italic">
                I
              </button>
              <button type="button" className="p-1 hover:bg-gray-100 rounded underline">
                U
              </button>
              <button type="button" className="p-1 hover:bg-gray-100 rounded">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
              <button type="button" className="p-1 hover:bg-gray-100 rounded">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                  />
                </svg>
              </button>
            </div>
            <textarea rows={6} className="w-full p-4 focus:outline-none" placeholder="Write your post here..." />
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
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 font-medium">
            Submit
          </button>
        </form>
      </div>
    </div>

        


      {/* rank list grid */}

    
     
   
    
            
        </div>

        <div className="col-span-3" style={{position: "relative", top: "-50px"}}>

            <ActiveMembers/>
            <div className='mt-8'><RecentTopics/></div>
            <div className='mt-8'><LatestActivities/></div>
            <div className='mt-8'><ContactUs/></div>

            
        </div>

        </div>
            
     
            
        </div>
    );
};

export default BusinessTopics;