import React from 'react';
import userImage from "../../assets/images/user.jpg";

const BirthdayLargeCard = () => {

    return (

        <div className="rounded-md items-center justify-center">
      <div className="">
        {/* Main Card */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          {/* Header Section with Bunting */}
          <div className="relative bg-blue-600 pt-8 pb-12 px-6 text-center">
            {/* Decorative Bunting */}
            <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden">
              <div className="flex justify-center gap-2">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 rotate-45 transform translate-y-2 ${
                      i % 3 === 0 ? "bg-yellow-400" : i % 3 === 1 ? "bg-red-500" : "bg-green-500"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <div className="inline-block rounded-full bg-white p-1 mb-4 mt-4">
              <img
                src={userImage}
                alt="Birthday profile"
                className="w-16 h-16 rounded-full"
              />
            </div>

            {/* Birthday Message */}
            <h1 className="text-white text-xl font-semibold mb-2">Happy birthday, Maya</h1>
            <p className="text-white/80 text-sm mb-6">
              Celebrate this special occasion with your friend and wish them well on their special day
            </p>

            {/* Send Greeting Button */}
            <button className="text-white px-6 py-2 rounded-full font-medium" style={{backgroundColor: "#142d6f"}}>
              Send Greeting
            </button>
          </div>

          {/* Upcoming Birthdays Section */}
          <div className="bg-white px-6 py-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-800 font-semibold">Upcoming Birthdays</h2>
              <a href="#" className="text-blue-600 text-sm">
                View all
              </a>
            </div>

            {/* Birthday List */}
            <div className="flex items-center gap-4">
              {[
                { name: "Maria Christina"},
                { name: "Marc Vandever"},
                { name: "Kristin Watson"},
              ].map((person, index) => (
                <div key={index} className="flex flex-row items-center justify-center mx-auto py-2">
                  <img
                    src={userImage}
                    alt={person.name}
                    className="w-14 h-14 rounded-full mb-1"
                  />
                 <div className='ml-2'>
                 <p className="text-center whitespace-nowrap font-bold" style={{color: "#142d6f"}}>{person.name}</p>
                 <p className="" style={{color: "#142d6f"}}>Birthday in April</p>
                 </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
       
       
    );
};

export default BirthdayLargeCard;