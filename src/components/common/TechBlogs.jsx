import React from 'react';
import latestNews from "../../assets/images/latestnews.jpg";

const TechBlogs = () => {
    return (
       
        <div className="p-4 max-w-sm mt-2 cursor-pointer">
      <div className="flex justify-between mb-3">
        <h2 className="text-lg font-bold text-gray-900">Tech blogs</h2>
        <div className="flex space-x-2">
          <button className="p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button className="p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative mb-3">
        <img 
          src={latestNews}
          alt="Code on screen" 
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      <div className="space-y-2">
        <span className="text-sm text-gray-500">• 6 min read</span>
        
        <h3 className="text-xl font-bold text-blue-900">
          Understanding CSS Grid: Creating a Grid Container
        </h3>
        
        <p className="text-sm text-gray-600">
          Create your own social media calendar with a step-by-step guide, or use this fr...
        </p>

        <div className="flex items-center pt-2">
          <img 
            src={latestNews} 
            alt="Esther Howard" 
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <p className="text-sm font-semibold text-blue-700">Esther Howard</p>
            <p className="text-sm text-gray-500">Dec 14, 2024</p>
          </div>
        </div>

        <button className="text-sm text-blue-500 flex items-center mt-2">
          See more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>

    );
};

export default TechBlogs;