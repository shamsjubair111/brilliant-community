import React from 'react';
import technology from "../../assets/images/technology.jpg";

const UnnanmedComponent = () => {


    const articles = [
        {
          id: 1,
          readTime: '6 min read',
          title: 'How to bring the season into your great marketing.',
          description: 'Lacus viverra vitae congue eu consequat ac. Cursus metus aliquam...',
        },
        {
          id: 2,
          readTime: '6 min read',
          title: 'Build up healthy habits and strong peaceful life.',
          description: 'Lacus viverra vitae congue eu consequat ac. Cursus metus aliquam...',
        }
      ];


    return (

        <div className="max-w-4xl mx-auto mt-8">
        <div className="flex space-x-4">
          {articles.map((article) => (
            <div 
              key={article.id}
              className="w-1/2 rounded-xl overflow-hidden transition-shadow duration-300 cursor-pointer"
            >
              {/* Image container */}
              <div className="relative">
                <div className="h-48 overflow-hidden">
                  <img
                    src={technology}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute bottom-2 left-3 bg-white/90 text-gray-700 text-xs px-2 py-1 rounded-full">
                  {article.readTime}
                </span>
              </div>
  
              {/* Content */}
              <div className="p-4">
                <h3 className="text-blue-900 font-semibold text-lg mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    );
};

export default UnnanmedComponent;