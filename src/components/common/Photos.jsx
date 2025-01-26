import React from 'react';
import news from "../../assets/images/news.jpg";

const Photos = () => {

    const photos = [
        {
          id: 1,
          alt: "Person working at desk",
        },
        {
          id: 2,
          alt: "Abstract geometric pattern",
        },
        {
          id: 3,
          alt: "Financial graph",
        },
        {
          id: 4,
          alt: "Person with laptop",
        },
        {
          id: 5,
          alt: "Team meeting",
        },
        {
          id: 6,
          alt: "Financial concept",
        },
      ]

    return (
        
        <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Photos</h2>
          <a href="#" className="text-blue-600 text-sm hover:underline">
            View all →
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="aspect-square rounded-lg overflow-hidden">
              <img src={news} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

    );
};

export default Photos;