import React, { useEffect, useState } from 'react';
import technology from "../../assets/images/technology.jpg";

const Carousel = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
          id: 1,
          tag: 'NEWS',
          title: 'Using Social Network Properly for Businesses',
          date: 'January 11, 2024',
          description: 'Learn how to maximize social media marketing to grow your business with these helpful tips.'
        },
        {
          id: 2,
          tag: 'MARKETING',
          title: 'Digital Marketing Trends for 2024',
          date: 'January 12, 2024',
          description: 'Discover the latest digital marketing trends that will shape the industry this year.'
        },
        {
          id: 3,
          tag: 'STRATEGY',
          title: 'Building Your Brand Online',
          date: 'January 13, 2024',
          description: 'Essential strategies for developing a strong online brand presence.'
        }
      ];

      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentSlide((prevSlide) => 
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
          );
        }, 4000);
    
        return () => clearInterval(timer);
      }, []);

    return (

        <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-[400px] overflow-hidden rounded-xl">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Image with gradient overlay */}
            <div className="relative w-full h-full">
              <img
                src={technology}
                alt={slide.title}
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="inline-block px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded-full mb-3">
                {slide.tag}
              </span>
              <h2 className="text-2xl font-bold mb-2 line-clamp-2">
                {slide.title}
              </h2>
              <p className="text-sm text-gray-200 mb-2">
                {slide.date}
              </p>
              <p className="text-sm text-gray-100 line-clamp-2">
                {slide.description}
              </p>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-4 right-6 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-1 transition-all duration-500 ${
                index === currentSlide ? 'w-6 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>

    );
};

export default Carousel;