import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHand, faBriefcase, faGear} from '@fortawesome/free-solid-svg-icons';

const KnowledgeBaseOne = () => {

    const [category, setCategory] = useState("All categories")

    const primaryCardData = [
        {
            title: "Introduction",
            description: "6 articles",
            icon: faHand
        },

        {
            title: "Business",
            description: "6 articles",
            icon: faBriefcase
        },

        {
            title: "Configurations",
            description: "6 articles",
            icon: faGear
        }
    ]

    const items = Array(8).fill(null);
    
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
                placeholder="Quick search"
                className="flex-1 border-0 bg-transparent text-sm focus:outline-none"
            />
            <div className="relative">
                <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="appearance-none bg-transparent pr-8 text-sm focus:outline-none"
                >
                <option>All categories</option>
               
                </select>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            <button className="rounded-full bg-[#303030] px-6 py-2 text-sm text-white hover:bg-[#404040] focus:outline-none focus:ring-2 focus:ring-[#303030] focus:ring-offset-2">
                Search
            </button>
            </div>

            </div>


            <div className="grid grid-cols-3 gap-8 px-16" style={{position: "relative", bottom: "50px"}}>
           {primaryCardData?.map((data)=>
            <div key={data?.title} style={{height: "100px"}} className="flex items-center bg-white p-10 rounded-lg">
                <div> <FontAwesomeIcon icon={data?.icon} className="mr-4 text-5xl"  style={{color: "#17177b" , cursor: "pointer"}}/></div>
                <div>
                    <p className='font-bold mb-1' style={{color: "#17177b"}}>{data?.title}</p>
                    <p style={{color: "#17177b"}}>{data?.description}</p>
                </div>
            </div>
            
            )}
        
            </div>

             <div className="grid grid-cols-4 gap-8 px-16 mt-12" style={{position: "relative", bottom: "50px"}}>

            {items.map((_, index) => (
                  <div className="w-full max-w-sm rounded-3xl bg-white p-4 shadow-lg">
                  {/* Header Section */}
                  <div className="mb-4 flex items-center gap-2 rounded-2xl bg-blue-600 p-4 text-white">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                      <path d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11zM12 18.33a6.33 6.33 0 110-12.66 6.33 6.33 0 010 12.66z M15.5 7.5a1 1 0 11-2 0 1 1 0 012 0zM8.5 7.5a1 1 0 11-2 0 1 1 0 012 0z M12 15.33c2.21 0 4-1.79 4-4h-8c0 2.21 1.79 4 4 4z" />
                      </svg>
                      <h2 className="text-xl font-semibold">Getting started</h2>
                  </div>
      
                  {/* Links Section */}
                  <div className="space-y-4">
                      {[
                      "How to Sign Up for updates?",
                      "How to Customize Your Preferences?",
                      "How To Purchase Our Subscription?",
                      "Do You Have Any Refund or Return Policies?",
                      ].map((text, index) => (
                      <a key={index} href="#" className="flex items-center gap-3 text-[15px] text-[#1e2b4f] hover:opacity-75">
                          <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                          </svg>
                          {text}
                      </a>
                      ))}
      
                      {/* See more link */}
                      <a href="#" className="mt-2 flex items-center gap-2 text-sm text-blue-600 hover:opacity-75">
                      See more
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      </a>
                  </div>
                  </div>
            ))}

            </div>


          


          
                    
                </div>
    );
};

export default KnowledgeBaseOne;