import React from 'react';
import { Link } from 'react-router-dom';

const MemberActivityOptions = () => {

    const navItems = [
        { name: "Personal", current: true },
        { name: "Mentions", current: false },
        { name: "Favorites", current: false },
        { name: "Friends", current: false },
        { name: "Groups", current: false },
      ]

    return (

        <div className="w-full bg-white border-b p-3 rounded-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* Navigation Items */}
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
               
                className={`text-sm ${
                  item.current ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Dropdown */}
          <div className="relative">
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
              <span>Show:</span>
              <span className="font-medium">Everything</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default MemberActivityOptions;