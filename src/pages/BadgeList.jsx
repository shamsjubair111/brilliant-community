import React from 'react';
import ActiveMembers from '../components/common/ActiveMembers';
import LatestActivities from '../components/common/LatestActivities';
import ContactUs from '../components/common/ContactUs';
import Pagination from '../components/common/Pagination';

const BadgeList = () => {

    const badges = [
        {
          id: 1,
          title: "Content Creator",
          description: "If user earned 50 points then unlocked this badge",
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
          textColor: "text-green-600",
          count: "12",
        },
        {
          id: 2,
          title: "Social Friend",
          description: "If user earned 50 points then unlocked this badge",
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          textColor: "text-red-600",
          count: "12",
        },
        {
          id: 3,
          title: "Food holic",
          description: "If user earned 50 points then unlocked this badge",
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          textColor: "text-red-600",
          count: "10",
        },
        {
          id: 4,
          title: "1 year of Membership",
          description: "If user earned 50 points then unlocked this badge",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200",
          textColor: "text-blue-600",
          count: "12",
        },
        {
          id: 5,
          title: "Trend Setter",
          description: "If user earned 50 points then unlocked this badge",
          bgColor: "bg-purple-50",
          borderColor: "border-purple-200",
          textColor: "text-purple-600",
          count: "12",
        },
        {
          id: 6,
          title: "Community Health",
          description: "Has participated in Health Group",
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          textColor: "text-red-600",
          count: "12",
          isNew: true,
        },
        {
          id: 7,
          title: "Featured",
          description: "If user earned 50 points then unlocked this badge",
          bgColor: "bg-teal-50",
          borderColor: "border-teal-200",
          textColor: "text-teal-600",
          count: "12",
        },
        {
          id: 8,
          title: "Content Creator",
          description: "If user earned 50 points then unlocked this badge",
          bgColor: "bg-teal-50",
          borderColor: "border-teal-200",
          textColor: "text-teal-600",
          count: "12",
        },
        {
          id: 9,
          title: "Thrive Shine",
          description: "If user earned 50 points then unlocked this badge",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200",
          textColor: "text-blue-600",
          count: "8",
        },
        {
          id: 10,
          title: "Content Creator",
          description: "If user earned 50 points then unlocked this badge",
          bgColor: "bg-teal-50",
          borderColor: "border-teal-200",
          textColor: "text-teal-600",
          count: "32",
        },
        {
          id: 11,
          title: "Content Creator",
          description: "If user earned 50 points then unlocked this badge",
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
          textColor: "text-green-600",
          count: "12",
        },
        {
          id: 12,
          title: "Content Creator",
          description: "If user earned 50 points then unlocked this badge",
          bgColor: "bg-amber-50",
          borderColor: "border-amber-200",
          textColor: "text-amber-600",
          count: "12",
        },
      ]

    return (

        <div>

        <div className='flex flex-col  items-center' style={{backgroundColor: "#4d4efe",height:"200px"}}>


        <h1 className='text-white text-4xl font-bold mb-2 mt-12'>Groups</h1>

        <p className='text-white mb-6'>Browse all the groups of the community!</p>

        

        </div>


        {/* Grid */}

        <div className="grid grid-cols-12 p-6 gap-6">

        <div className="col-span-9">

        


      {/* badge list grid */}

      <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {badges.map((badge) => (
          <div key={badge.id} className="rounded-2xl p-6 text-center">
            <div className="relative inline-block">
              <div className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {badge.count}
              </div>
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${badge.bgColor} ${badge.borderColor} ${badge.textColor}`}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900 mb-1 flex items-center justify-center gap-2">
                {badge.title}
                {badge.isNew && (
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    + 40
                  </span>
                )}
              </h3>
              <p className="text-sm text-gray-500">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
     
     <div className='my-8'><Pagination/></div>
    
            
        </div>

        <div className="col-span-3">

            <div className='mt-4'><ActiveMembers/></div>
            <div className='mt-8'><LatestActivities/></div>
            <div className='mt-8'><ContactUs/></div>

            
        </div>

        </div>
            
        </div>
        
    );
};

export default BadgeList;