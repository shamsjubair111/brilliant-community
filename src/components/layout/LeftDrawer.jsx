import React, { useState } from 'react';
import { ChevronRight } from "lucide-react"
import { Link } from 'react-router-dom';

const LeftDrawer = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    const communityOptions = [
        {
          name: "Knowledge Base",
          icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253",
        },
        {
          name: "Activity",
          icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        },
        {
          name: "Messages",
          icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
        },
        {
          name: "Members",
          icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
        },
        {
          name: "Groups",
          icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
        },
        {
          name: "Forums",
          icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
        },
        {
          name: "Courses",
          icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253",
          hasDropdown: true,
        },
        {
            name: "Shop",
            icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253",
            hasDropdown: true,
        },
        {
          name: "Memberships",
          icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z",
        },
        {
          name: "Events",
          icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        },
      ];

      const otherOptions = [

        { name: "News", icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z" },

        {
          name: "Jobs",
          icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
        }
      ]


    return (
        <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r shadow-lg transform ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`} style={{boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",marginTop: "72px"}}
      >
        <aside className="h-full overflow-y-auto p-4">
          
  
          {/* Home Pages Section */}
          <div className="mb-4">
            <Link className="flex items-center px-4 py-2 text-sm text-indigo-600 bg-indigo-50 rounded-lg">
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Home Pages
            </Link>
          </div>
  
          {/* COMMUNITY Section */}
          <div className="mb-8">
            <h3 className="px-4 mb-2 text-xs font-semibold text-gray-500">COMMUNITY</h3>
            <nav className="space-y-1">
              {communityOptions.map((item) => (
                <Link
                  key={item.name}
                  
                  className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg group"
                >
                  <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  {item.name}
                  {item.hasDropdown && <ChevronRight className="w-4 h-4 ml-auto text-gray-400" />}
                </Link>
              ))}
            </nav>
          </div>
  
          {/* OTHERS Section */}
          <div>
            <h3 className="px-4 mb-2 text-xs font-semibold text-gray-500">OTHERS</h3>
            <nav className="space-y-1">
              {otherOptions.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg group"
                >
                  <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </aside>
  
        
      </div>
    );
};

export default LeftDrawer;