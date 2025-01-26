import React from 'react';
import userImage from "../../assets/images/user.jpg";
import { Link } from 'react-router-dom';

const VipQuotes = () => {
    return (
      

    <div className="max-w-md mx-auto">
      {/* Testimonial Card */}
      <div className="bg-blue-600 rounded-xl p-6 text-white relative overflow-hidden">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={userImage}
            alt="Mathew Roller"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-medium">Mathew Roller</h3>
            <p className="text-blue-200 text-sm">Co-Founder of MeetUs</p>
          </div>
        </div>

        <blockquote className="italic text-lg mb-4">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
          texts. Separated Bookmarks they live in grove right at the coast of the
        </blockquote>

        <Link className="inline-flex items-center text-sm hover:underline">
          Read more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>

        {/* Quote mark decoration */}
        <div className="absolute bottom-4 right-4 text-blue-500/20">
          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </div>

      </div>
            
       
    );
};

export default VipQuotes;