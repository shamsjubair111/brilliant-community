import React from 'react';
import news from "../../assets/images/news.jpg";
import userImage from "../../assets/images/user.jpg";
import { Link } from 'react-router-dom';

const BusinessPageHeader = () => {

    const navigation = [
        { name: "Home", href: "#", current: true },
        { name: "Forum", href: "#", current: false },
        { name: "Members", href: "#", current: false, badge: "8" },
        { name: "Send Invites", href: "#", current: false },
        { name: "Media", href: "#", current: false, badge: "18" },
        { name: "Messages", href: "#", current: false },
        { name: "Docs", href: "#", current: false },
        { name: "Courses", href: "#", current: false },
      ]
    
      const members = [
        { id: 1},
        { id: 2},
        { id: 3},
        { id: 4},
      ]
    

    return (

         <div className="min-h-[300px] relative px-12">
      {/* Cover Image */}
      <div className="absolute inset-0 h-[200px] bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 overflow-hidden">
        <img
          src={news}
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <div className=" mx-auto">
          {/* Group Info */}
          <div className="flex items-center gap-4 mb-6">
            {/* Profile Image */}
            <div className="w-24 h-24 rounded-lg overflow-hidden border-4 border-white shadow-lg">
              <div className="w-full h-full bg-black flex items-center justify-center text-red-500 font-bold text-xs text-center leading-tight">
                <span className="block">
                  MAR
                  <br />
                  KET
                </span>
              </div>
            </div>

            {/* Group Details */}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold mb-1" style={{color: "#142d6f"}}>B2B Business</h1>
                  <div className="flex items-center gap-4 text-sm" style={{color: "#142d6f"}}>
                    <span>15 Posts</span>
                    <span>•</span>
                    <span>24 Posts</span>
                    <span>•</span>
                    <span>1,243 Members</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 text-white rounded-full" style={{backgroundColor: "#142d6f"}}> 
                    Leave group
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Member Avatars */}
              <div className="flex items-center gap-1 mt-4">
                {members.map((member) => (
                  <img
                    key={member.id}
                    src={userImage}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-1 bg-white px-4 rounded-lg shadow-sm">
            {navigation.map((item) => (
              <Link
                key={item.name}
                
                className={`relative px-4 py-4 text-sm font-medium transition-colors ${
                  item.current ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {item.name}
                {item.badge && (
                  <span className="absolute top-3 -right-1 w-5 h-5 bg-blue-100 text-blue-600 rounded-full text-xs flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
    );
};

export default BusinessPageHeader;