import React from 'react';

const MembersListOptions = () => {

    
    return (

         <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-md">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-blue-600 font-medium">
            All Members
            <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">6</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600">
            Leaders
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">1</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600">
            Students
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">2</span>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button className="p-2 text-blue-600 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
          </div>

          <div className="relative">
            <button className="flex items-center gap-2 text-gray-600 text-sm">
              Order By:
              <span className="font-medium">Newest</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
};

export default MembersListOptions;