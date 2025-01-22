import React from 'react';
import latestNews from "../../assets/images/latestnews.jpg";

const LatestNews = () => {

    const newsItems = [
        {
          id: 1,
          title: 'Build up healthy habits and strong peaceful life.',
          date: 'January 12, 24'
          
        },
        {
          id: 2,
          title: '14 Must-Try AI Social Media Content Creation Tools in 2024',
          date: 'January 12, 24'
          
        },
        {
          id: 3,
          title: 'Everything We Know About How Videos Are Ranked',
          date: 'January 12, 24'
         
        },
        {
          id: 4,
          title: '11 Simple Things You Can Do Today That Will Make You Happier, Backed By Science',
          date: 'January 12, 24'
        
        }
      ];


    return (

        <div className="p-4 max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Latest news</h2>
          <a href="#" className="text-blue-500 text-sm flex items-center">
            View more
            <span className="ml-1">›</span>
          </a>
        </div>
        
        <div className="space-y-4">
          {newsItems.map((item) => (
            <div key={item.id} className="flex items-start space-x-3 cursor-pointer">
              <img
                src={latestNews}
                alt=""
                className="w-12 h-15 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-blue-900 leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    );
};

export default LatestNews;