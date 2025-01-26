import React from 'react';

const Pagination = () => {

    const pages = [1, 2, 3]

    return (

        <div className="flex justify-center gap-2">
      {pages.map((page) => (
        <button
          key={page}
          className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium transition-colors
            ${page === 1 ? "bg-blue-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
        >
          {page}
        </button>
      ))}
      <button
        className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
        aria-label="Next page"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    );
};

export default Pagination;