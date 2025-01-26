import React from 'react';
import MembersListOptions from './MembersListOptions';
import ActiveMembers from './ActiveMembers';
import LatestActivities from './LatestActivities';
import ContactUs from './ContactUs';
import MembersGrid from './MembersGrid';

const MembersLIst = () => {
    return (

        <div>

        <div className='flex flex-col  items-center' style={{backgroundColor: "#4d4efe",height:"300px"}}>


        <h1 className='text-white text-4xl font-bold mb-2 mt-12'>Help Center</h1>

        <p className='text-white mb-6'>Find answers to your questions and solutions to your problems</p>

        <div className="flex w-full max-w-3xl items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        >
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
        </svg>
        <input
        type="text"
        placeholder="Search members"
        className="flex-1 border-0 bg-transparent text-sm focus:outline-none"
        />
        
        <button className="rounded-full bg-[#303030] px-6 py-2 text-sm text-white hover:bg-[#404040] focus:outline-none focus:ring-2 focus:ring-[#303030] focus:ring-offset-2">
        Search
        </button>
        </div>

        </div>


        <div className="grid grid-cols-12 px-8">
     
        <div className="col-span-9 p-4 rounded-md">

            <MembersListOptions/>

            <MembersGrid/>
        </div>

      
        <div className="col-span-3 p-4 rounded-md">

            <ActiveMembers/>

            <LatestActivities/>

           <div className='mt-8'><ContactUs/></div>
        </div>
        </div>
            
        </div>
    );
};

export default MembersLIst;