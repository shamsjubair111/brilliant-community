import React from 'react';

const TrendingHashtags = () => {
    return (

        <div>
        <h3 className="font-semibold mb-3">Trending Hashtags</h3>
        <div className="flex flex-wrap gap-2">
          {['#basic', '#trending', '#motivation', '#stories', '#lifestyle'].map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
    );
};

export default TrendingHashtags;