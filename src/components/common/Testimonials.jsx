import React from 'react';
import { Star } from "lucide-react";
import userImage from "../../assets/images/user.jpg";

const Testimonials = () => {

    return (

            <div className="max-w-md mx-auto">
        <div className="bg-gray-50 rounded-md p-6 space-y-4">
            {/* Header */}
            <h2 className="text-lg font-semibold text-[#1a237e]">Testimonials</h2>

            {/* Star Rating */}
            <div className="flex gap-1">
            {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <Star className="w-5 h-5 text-gray-300" />
            </div>

            {/* Testimonial Text */}
            <p className="text-[#1a237e] text-sm leading-relaxed">
            I really appreciate the flexibility I get with MeetUs. I can try any course and switch to another one for no
            additional cost. Thi...
            </p>

            {/* Profile Section */}
            <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                <img src={userImage} alt="" className="w-full h-full object-cover" />
            </div>
            <div>
                <h3 className="text-[#1a237e] font-medium text-sm">Hunter Muller</h3>
                <p className="text-gray-600 text-xs">Senior Sales Director</p>
            </div>
            </div>

        </div>
        </div>

    );
};

export default Testimonials;