import React from 'react';

const ContactUs = () => {

    return (

        <div>
            <div className="max-w-md mx-auto">
        <div className="relative bg-pink-100 rounded-3xl p-8 overflow-hidden">
            {/* Hashtag background decoration */}
            <div className="absolute bottom-4 right-4 w-24 h-24">
            <div className="w-full h-2 bg-yellow-300 rounded-full transform rotate-45" />
            <div className="w-full h-2 bg-yellow-300 rounded-full transform -rotate-45 mt-3" />
            <div className="w-2 h-full bg-yellow-300 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
            <div className="w-2 h-full bg-yellow-300 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 rotate-90" />
            </div>

            {/* Content */}
            <div className="relative z-10">
            <h2 className="text-4xl font-bold text-[#1a237e] mb-4">
                Meet<span className="text-blue-400">Us</span>
            </h2>
            <p className="text-[#1a237e] opacity-80 mb-6 max-w-[200px] leading-snug">
                Feel free to reach us anytime. We're available 24/7.
            </p>
            <button className="bg-white text-[#1a237e] px-6 py-3 rounded-full font-medium shadow-sm hover:shadow-md transition-shadow">
                Contact us
            </button>
            </div>
        </div>
        </div>
        </div>

    );
};

export default ContactUs;