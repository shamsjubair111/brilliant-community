import React from 'react';
import userImage from "../../assets/images/user.jpg";

const BirthdaySmallCard = () => {
    return (
         <div className="bg-blue-500 rounded-lg p-6 text-white mb-8 relative">
                    <div className="absolute top-0 right-0">
                      <div className="relative">
                        <div className="absolute -top-2 -left-12">
                         
                        </div>
                      </div>
                    </div>
                    <img 
                      src={userImage}
                      alt="Birthday" 
                      className="rounded-full mb-3"
                    />
                    <h3 className="text-lg font-semibold mb-1">Maya's birthday is May 17</h3>
                    <p className="text-sm opacity-90 mb-4">Write a birthday message with your best wishes on his profile</p>
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium">
                      Send Greeting
                    </button>
                  </div>
    );
};

export default BirthdaySmallCard;