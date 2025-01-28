import React from 'react';
import userImage from "../../assets/images/user.jpg";
import { Link } from 'react-router-dom';
import ActiveMembers from './ActiveMembers';
import RecentTopics from './RecentTopics';
import LatestActivities from './LatestActivities';
import ContactUs from './ContactUs';

const DigitalEntertainment = () => {

    const thread = {
        title: "Digital entertainment",
        metadata: {
          replies: 2,
          lastUpdate: "1 years, 2 months ago",
          lastUpdateBy: "Michelle Storm",
        },
        tags: ["Forum", "post", "topic", "wordpress"],
        posts: [
          {
            id: 1,
            author: {
              name: "Sabina Kelleri",
              role: "Keymaster",
              verified: true,
            },
            timestamp: "6 days, 9 hours ago at 5:25 am",
            content:
              "Tempor id eu nisi nunc mi ipsum faucibus vitae. Neque laoreet suspendisse interdum consectetur libero id faucibus nisi tincidunt. Dui vivamus arcu felis bibendum. Laoreet non curabitur gravida arcu.",
          },
          {
            id: 2,
            author: {
              name: "Scott Smith",
              role: "Participant",
              verified: false,
            },
            timestamp: "6 days, 9 hours ago at 9:25 am",
            content: `In tempus non urna ac sodales. Nullam vitae tempor purus. Aenean ornare ante sed blandit aliquet. Cras in tellus sed nunc tristique rhoncus. Praesent eu condimentum libero. Aliquam erat volutpat. Sed non lacus bibendum enim, et venenatis sem tempor vitae magna. Etiam purus eros, ornare a imperdiet ut, imperdiet et nunc. Ut tempor turpis ut semper tristique. Nulla eu mauris eu ligula molestie vestibulum. Mauris non curabitur quis libero at sem.\n\nEtiam auctus non libero lectus pellentesque, quis mi dapibus nisl in ultricies diam massa nec enim. Sed gravida nunc mattis, porttitor felis id, tempus turpis. Phasellus ac hendrerit nulla. Suspendisse posuere ex purus et dapibus. Phasellus condimentum tortor enim, ac pretium sem fringilla vitae.`,
          },
          {
            id: 3,
            author: {
              name: "Sabina Kelleri",
              role: "Keymaster",
              verified: true,
            },
            timestamp: "6 days, 9 hours ago at 9:25 am",
            quotedText:
              "Tempor id eu nisi nunc mi ipsum faucibus vitae. Neque laoreet suspendisse interdum consectetur libero id faucibus nisi tincidunt. Dui vivamus arcu felis bibendum. Laoreet non curabitur gravida arcu.",
            content:
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
          },
        ],
      }

    return (

       

        <div className="grid grid-cols-12 p-6">

        <div className="col-span-8">

      
                <div className="max-w-4xl p-4">

                <h1 className='font-bold mb-4' style={{color: "#142d6f"}}>Digital Entertainment</h1>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-4">
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                Home
                </Link>
                <span className="text-gray-400">/</span>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                Forums
                </Link>
                <span className="text-gray-400">/</span>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                General Discussion
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-gray-900">Digital entertainment</span>
            </nav>

            {/* Thread Header */}
            <div className="mb-6">
                <div className="text-sm text-gray-600 mb-2">
                This topic has {thread.metadata.replies} replies and was last updated {thread.metadata.lastUpdate} by{" "}
                {thread.metadata.lastUpdateBy}
                </div>

                <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Tags:</span>
                    {thread.tags.map((tag) => (
                    <Link key={tag} href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
                        {tag}
                    </Link>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                    </svg>
                    Favorite
                    </button>
                    <button className="px-4 py-2 bg-blue-900 text-white rounded-full text-sm">Unsubscribe</button>
                </div>
                </div>
            </div>

            {/* Posts List */}
            <div className="space-y-6 mb-6">
                {thread.posts.map((post) => (
                <div key={post.id} className="rounded-lg p-6">
                    <div className="flex gap-4">
                    {/* Author Info */}
                    <div className="w-32 flex-shrink-0">
                        <div className="flex flex-col items-center text-center">
                        <img
                            src={userImage}
                            alt={post.author.name}
                            className="w-12 h-12 rounded-full mb-2"
                        />
                        <div className="flex items-center gap-1">
                            <span className="font-medium text-sm">{post.author.name}</span>
                            {post.author.verified && (
                            <svg className="w-4 h-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                fillRule="evenodd"
                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                />
                            </svg>
                            )}
                        </div>
                        <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full mt-1">
                            {post.author.role}
                        </span>
                        </div>
                    </div>

                    {/* Post Content */}
                    <div className="flex-1 min-w-0">
                        <div className="text-xs text-gray-500 mb-4">{post.timestamp}</div>
                        {post.quotedText && (
                        <blockquote className="border-l-4 border-gray-200 pl-4 mb-4 text-gray-600 text-sm italic">
                            {post.quotedText}
                        </blockquote>
                        )}
                        <div className="prose prose-sm max-w-none">
                        {post.content.split("\n").map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">REPLY</button>
                        <span style={{color: "#142d6f"}}>#{post.id}</span>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>

            {/* Reply Form */}
            <div className="rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Reply To: "Digital entertainment"</h2>
                <form className="space-y-4">
                {/* Rich Text Editor */}
                <div className="border rounded-lg">
                    <div className="border-b p-2 flex gap-2">
                    <button type="button" className="p-1 hover:bg-gray-100 rounded">
                        <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                    <button type="button" className="p-1 hover:bg-gray-100 rounded font-bold">
                        B
                    </button>
                    <button type="button" className="p-1 hover:bg-gray-100 rounded italic">
                        I
                    </button>
                    <button type="button" className="p-1 hover:bg-gray-100 rounded underline">
                        U
                    </button>
                    {/* Add more editor buttons as needed */}
                    </div>
                    <textarea rows={6} className="w-full p-4 focus:outline-none" placeholder="Write your reply here..." />
                </div>

                {/* Tags */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
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

        </div>

        <div className="col-span-4">

            <div className='mt-16'><ActiveMembers/></div>
            <div className='mt-8'><RecentTopics/></div>
            <div className='mt-8'><LatestActivities/></div>
            <div className='mt-8'><ContactUs/></div>

        </div>

        </div>
            
       
    );
};

export default DigitalEntertainment;