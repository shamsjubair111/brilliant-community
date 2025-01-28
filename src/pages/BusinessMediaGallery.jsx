import React from 'react';
import userImage from "../assets/images/user.jpg";
import BusinessPageHeader from '../components/common/BusinessPageHeader';
import ActiveMembers from '../components/common/ActiveMembers';
import Groups from '../components/common/Groups';
import RecentTopics from '../components/common/RecentTopics';
import ContactUs from '../components/common/ContactUs';
import { Link } from 'react-router-dom';

const BusinessMediaGallery = () => {

    const tabs = [
        { name: "All", href: "#", count: null, current: true },
        { name: "Albums", href: "#", count: null, current: false },
        { name: "Photos", href: "#", count: 2, current: false },
        { name: "Videos", href: "#", count: 6, current: false },
        { name: "Music", href: "#", count: 2, current: false },
      ]
    
      const mediaItems = [
        {
          id: 1,
          type: "image",
          alt: "Digital pattern",
        },
        {
          id: 2,
          type: "image",
          alt: "Silhouette portrait",
        },
      ]

    return (

        <div>

        <BusinessPageHeader/>

        
        {/* Grid */}

        <div className="grid grid-cols-12 p-6">

        <div className="col-span-9 px-12" style={{position: 'relative', top: "-70px"}}>

       
        

        <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        {/* Tabs */}
        <div className="flex items-center gap-6">
          <h2 className="text-lg font-semibold text-gray-900">Media Gallery</h2>
          <nav className="flex gap-4">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                
                className={`flex items-center gap-1 px-1 py-2 text-sm font-medium border-b-2 ${
                  tab.current
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.name}
                {tab.count !== null && (
                  <span className="bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full text-xs">{tab.count}</span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            Upload
          </button>
        </div>
      </div>

      {/* Upload Area */}
      <div className="mb-6 border-2 border-dashed border-gray-300 rounded-lg p-8">
        <div className="text-center">
          {/* Album Selector */}
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Album:</span>
              <select className="border rounded-lg px-3 py-1.5">
                <option>Wall Posts</option>
                <option>Profile Pictures</option>
                <option>Cover Photos</option>
              </select>
            </div>
          </div>

          {/* Upload Instructions */}
          <div className="space-y-4">
            <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
              Select your files
            </button>
            <p className="text-sm text-gray-500">or drop your files here</p>
            <button className="px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800">Start upload</button>
          </div>
        </div>
      </div>

      {/* Media Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {mediaItems.map((item) => (
            <div
                key={item.id}
                className="relative aspect-square rounded-lg overflow-hidden group hover:ring-2 hover:ring-blue-500 cursor-pointer"
            >
                <img src={userImage} alt={item.alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-2 right-2 flex gap-1">
                    <button className="p-1 bg-white/20 rounded-lg hover:bg-white/30">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                    </svg>
                    </button>
                    <button className="p-1 bg-white/20 rounded-lg hover:bg-white/30">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                    </svg>
                    </button>
                </div>
                </div>
            </div>
            ))}
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

export default BusinessMediaGallery;