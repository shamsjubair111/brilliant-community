import React from 'react';
import BusinessPageHeader from '../components/common/BusinessPageHeader';
import ActiveMembers from '../components/common/ActiveMembers';
import RecentTopics from '../components/common/RecentTopics';
import ContactUs from '../components/common/ContactUs';
import Groups from '../components/common/Groups';
import userImage from "../assets/images/user.jpg";

const BusinessMessages = () => {

    const messages = [
        {
          id: 1,
          type: "header",
          content: "Start of Conversation",
          date: "April April 5, 2024",
        },
        {
          id: 2,
          user: {
            name: "Sarah Johnson"
          },
          content:
            "Good morning, team! Let's get started on brainstorming our next marketing strategy. We need to reach a wider weekly and attract more customers. Any ideas?",
          timestamp: "8:15 am",
          reactions: 1,
          replies: 3,
        },
        {
          id: 3,
          user: {
            name: "Marcus Thompson"
          },
          content:
            "Morning! I've been thinking about leveraging social media influencers. They have a huge following and can really help us reach a wider audience. We could identify influencers who align with our brand values and collaborate with them on promotional content.",
          timestamp: "8:17 am",
          reactions: 1,
        },
      ]

    return (

        <div>

        <BusinessPageHeader/>

        {/* Messages Grid */}

        <div className="grid grid-cols-12 p-6">

            <div className="col-span-9 px-12" style={{position: 'relative', top: "-70px"}}>

            <div className="flex flex-col">
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                    B2B
                </div>
                <div>
                    <h1 className="font-semibold">B2B Business</h1>
                    <span className="text-xs text-gray-500">2 Participants</span>
                </div>
                </div>
                <div className="flex items-center gap-3">
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Favorite</button>
                <button className="text-gray-400 hover:text-gray-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
                </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                <div key={message.id}>
                    {message.type === "header" ? (
                    <div className="flex flex-col items-center gap-1 my-6">
                        <span className="text-xs text-gray-500">{message.content}</span>
                        <span className="text-xs text-gray-500">{message.date}</span>
                    </div>
                    ) : (
                    <div className="flex gap-3 group">
                        <img
                        src={userImage}
                        alt={message.user.name}
                        className="w-8 h-8 rounded-full flex-shrink-0"
                        />
                        <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{message.user.name}</span>
                            <span className="text-xs text-gray-500">{message.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-900 mt-1">{message.content}</p>
                        <div className="flex items-center gap-3 mt-2">
                            {message.reactions && (
                            <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700">
                                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                />
                                </svg>
                                {message.reactions}
                            </button>
                            )}
                            {message.replies && (
                            <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                />
                                </svg>
                                {message.replies}
                            </button>
                            )}
                        </div>
                        </div>
                    </div>
                    )}
                </div>
                ))}
            </div>

            {/* Message Input */}
            <div className="border-t p-4">
                <div className="flex items-center gap-2">
                <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    />
                    </svg>
                </button>
                <input
                    type="text"
                    placeholder="Write your message..."
                    className="flex-1 px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                    Send
                </button>
                </div>
            </div>
            </div>

            </div>

            <div className="col-span-3" style={{position: "relative", top: "-50px"}}>

            <div><ActiveMembers/></div>
            <div className='mt-8'><Groups/></div>
            <div className='mt-8'><RecentTopics/></div>
            <div className='mt-8'><ContactUs/></div>


            </div>

            </div>
            
        </div>
    );
};

export default BusinessMessages;