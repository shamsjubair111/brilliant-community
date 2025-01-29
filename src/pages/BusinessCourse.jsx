import React from 'react';
import BusinessPageHeader from '../components/common/BusinessPageHeader';
import ActiveMembers from '../components/common/ActiveMembers';
import Groups from '../components/common/Groups';
import RecentTopics from '../components/common/RecentTopics';
import ContactUs from '../components/common/ContactUs';

const BusinessCourse = () => {

    const learningObjectives = [
        "Maximum Lorem Editing et Non Quis minorum. Sed Molestias In Tincid Non Topics Semper Bibendum.",
        "Tellus vitae ut pretium eu et magna da particied moles, augue velit cursus.",
        "Etiam sit amet non eget eros faucibus tincidunt. Duis leo.",
        "Sed semper, leo eget bibendum sodales, augue velit cursus nunc.",
      ]


    return (

        <div>
 
        <BusinessPageHeader/>

         {/* Grid Section Here */}

         <div className="grid grid-cols-12 p-6">

        <div className="col-span-9 px-4" style={{position: 'relative', top: "-70px"}}>

        <div className="p-4">
      {/* Header Tabs */}
            <div className="flex gap-6 mb-6">
                <button className="flex items-center gap-1 text-sm">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                </svg>
                Course
                </button>
                <button className="flex items-center gap-1 text-sm text-gray-500">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
                Members
                </button>
            </div>

            {/* Course Description */}
            <div className="mb-8">
                <h2 className="text-base font-medium mb-2">Course Description</h2>
                <p className="text-sm text-gray-600">
                Velit in molestie non nunc faucibus ut pellentesque ut velit per Blue. Auctor elit sed vulputate mi sit.
                Vulputate ut pharetra sit amet ullamcorper id cursus. Lorem ipsum morbi tempor nequere eu et consectetur
                semper sapien eros. Lorem magna fringilla urna porttitor rhoncus dolor purus.
                </p>
            </div>

            {/* Learning Objectives */}
            <div className="mb-8">
                <h2 className="text-base font-medium mb-4">What Will I Learn From This Course?</h2>
                <div className="space-y-3">
                {learningObjectives.map((objective, index) => (
                    <div key={index} className="flex items-start gap-2">
                    <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full border-2 border-indigo-600" style={{backgroundColor: "#4f46e5"}}></div>
                    <span className="text-sm text-gray-600">{objective}</span>
                    </div>
                ))}
                </div>
            </div>

            {/* Course Content */}
            <div className="mb-8">
                <h2 className="text-base font-medium mb-4">Course Content</h2>
                <div className="space-y-2">
                {/* Introduction */}
                <div className="rounded">
                    <div className="p-4">
                    <h3 className="text-sm font-medium">Introduction</h3>
                    </div>
                    <div className="border-t">
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-sm">Introduction</span>
                        </div>
                        <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-500">1 Topic • 1 Quiz</span>
                        <button className="text-indigo-600 text-sm">Expand</button>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Class project */}
                <div className="rounded">
                    <div className="p-4">
                    <h3 className="text-sm font-medium">Class project</h3>
                    </div>
                    <div className="border-t">
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-sm">Class project</span>
                        </div>
                        <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-500">1 Topic • 1 Quiz</span>
                        <button className="text-indigo-600 text-sm">Expand</button>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Advanced */}
                <div className="rounded">
                    <div className="p-4">
                    <h3 className="text-sm font-medium">Advanced</h3>
                    </div>
                    <div className="border-t">
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-sm">Notes & Pitch</span>
                        </div>
                        <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-500">2 Topic • 1 Quiz</span>
                        <button className="text-indigo-600 text-sm">Expand</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Lessons Content */}
            <div className="bg-indigo-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-white">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>
                    <span className="font-medium">Lessons content</span>
                </div>
                <div className="flex items-center gap-4 text-white text-sm">
                    <span>0% COMPLETE</span>
                    <span>0/3 Steps</span>
                </div>
                </div>
                <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border-2 border-white/50"></div>
                    <span className="text-sm text-white">
                    Course participants automatically get added as members to the group
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border-2 border-white/50"></div>
                    <span className="text-sm text-white">Group becomes private to course participants and invited members</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border-2 border-white/50"></div>
                    <span className="text-sm text-white">Test Examination</span>
                </div>
                </div>
            </div>
            </div>

        </div>

        <div className="col-span-3" style={{position: "relative", top: "-50px"}}>

        <div><ActiveMembers/></div>
        <div className='mt-8'><Groups/></div>
        <div className='mt-8'><RecentTopics/></div>
        <div className='mt-8'><ContactUs/></div>


        </div>

        </div>

            
        </div>
    );
};

export default BusinessCourse;