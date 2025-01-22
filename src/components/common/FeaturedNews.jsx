import React from 'react';
import news from "../../assets/images/news.jpg";

const FeaturedNews = () => {

    const articles = [
        {
          id: 1,
          readTime: '6 min read',
          title: 'AI Video Tools for Creators and Marketers, Tried and Tested',
          description: 'These AI video tools can help you write scripts, generate clips, optimize your editing, and even talk t...',
          date: 'January 12, 24'
        },
        {
          id: 2,
          readTime: '6 min read',
          title: 'LinkedIn SEO: How to Optimize Your Account in 2024',
          description: 'In this article, learn about LinkedIn SEO and how it can help you get featured by the algorithm - no SE...',
          date: 'January 12, 24'
        },
        {
          id: 3,
          readTime: '6 min read',
          title: 'Affiliate Marketing 101: How to Get Started As a Creator',
          description: 'Everything you need to know about how affiliate marketing works, how to join an affiliate program a...',
          date: 'January 12, 24'
        }
      ];


    return (

        <div className="bg-white rounded-xl p-6 mx-auto shadow-sm mt-8">
        <h2 className="text-blue-900 font-bold text-lg mb-6">Featured news</h2>
        
        <div className="space-y-6">
          {articles.map((article) => (
            <div key={article.id} className="flex gap-4 cursor-pointer">
              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src={news}
                  alt={article.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-gray-500 text-sm">• {article.readTime}</span>
                </div>
                
                <h3 className="text-blue-900 font-semibold text-base mb-1 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-1 line-clamp-2">
                  {article.description}
                </p>
                
                <span className="text-gray-500 text-sm">
                  {article.date}
                </span>
              </div>
            </div>
          ))}
        </div>
  
        <button className="text-blue-500 text-sm flex items-center mt-6">
          View all
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    );
};

export default FeaturedNews;