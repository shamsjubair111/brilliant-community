import React from 'react';
import BusinessPageHeader from '../components/common/BusinessPageHeader';
import ActiveMembers from '../components/common/ActiveMembers';
import Groups from '../components/common/Groups';
import RecentTopics from '../components/common/RecentTopics';
import ContactUs from '../components/common/ContactUs';

const BusinessDocs = () => {

    const documents = [
        {
          id: 1,
          title: "B2 Planning",
          expanded: true,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
          author: "System Admin",
          created: "September 14, 2023",
          lastEdited: "January 19, 2024",
          tags: ["Business"],
          actions: ["Read", "History"],
        },
        {
          id: 2,
          title: "Theme Documentation",
          expanded: true,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet.",
          author: "System Admin",
          created: "September 14, 2023",
          lastEdited: "January 19, 2024",
          tags: ["Business", "docs"],
          actions: ["Read", "Edit", "History"],
        },
        {
          id: 3,
          title: "Strategy Planning",
          expanded: false,
          description: "Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Lorem ipsum dolor sit.",
          author: "James",
          created: "September 14, 2023",
          lastEdited: "January 19, 2024",
          tags: ["Business", "docs"],
          actions: ["Read", "Edit", "History"],
        },
      ]


    return (

        <div>

            <BusinessPageHeader/>

            {/* Grid Section Here */}

            <div className="grid grid-cols-12 p-6">

            <div className="col-span-10 px-4" style={{position: 'relative', top: "-70px"}}>

            <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                    All Docs
                </a>
                <span className="text-gray-400">/</span>
                <span className="text-gray-900">B2B Business's Docs</span>
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">+ Create new docs</button>
            </div>

            {/* Search and Filters */}
            <div className="mb-6">
                <div className="flex gap-4 mb-4">
                <div className="flex-1 relative">
                    <input
                    type="text"
                    placeholder="Search docs..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <svg
                    className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                    </svg>
                </div>
                <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border rounded-lg flex items-center gap-2">
                    Attachments
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border rounded-lg flex items-center gap-2">
                    Tags
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                </div>
            </div>

            {/* Documents Table */}
            <div className="bg-white rounded-lg border">
                {/* Table Header */}
                <div className="grid grid-cols-[1fr,200px,200px,200px,150px] gap-4 p-4 bg-blue-600 text-white rounded-t-lg">
                <div className="text-sm font-medium">TITLE</div>
                <div className="text-sm font-medium">AUTHOR</div>
                <div className="text-sm font-medium">CREATED</div>
                <div className="text-sm font-medium">LAST EDITED</div>
                <div className="text-sm font-medium">TAGS</div>
                </div>

                {/* Table Body */}
                <div className="divide-y">
                {documents.map((doc) => (
                    <div key={doc.id} className="hover:bg-gray-50">
                    {/* Main Row */}
                    <div className="grid grid-cols-[1fr,200px,200px,200px,150px] gap-4 p-4">
                        <div className="flex items-center gap-2">
                        <button className="text-gray-400 hover:text-gray-600">
                            <svg
                            className={`w-4 h-4 transform transition-transform ${doc.expanded ? "rotate-90" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        <span className="text-sm font-medium text-gray-900">{doc.title}</span>
                        </div>
                        <div className="text-sm text-gray-500">{doc.author}</div>
                        <div className="text-sm text-gray-500">{doc.created}</div>
                        <div className="text-sm text-gray-500">{doc.lastEdited}</div>
                        <div className="flex gap-2">
                        {doc.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 text-xs bg-blue-50 text-blue-600 rounded-full">
                            {tag}
                            </span>
                        ))}
                        </div>
                    </div>

                    {/* Expanded Content */}
                    {doc.expanded && (
                        <div className="px-10 pb-4">
                        <p className="text-sm text-gray-600 mb-3">{doc.description}</p>
                        <div className="flex gap-3">
                            {doc.actions.map((action, index) => (
                            <button key={index} className="text-sm text-blue-600 hover:text-blue-700">
                                {action}
                            </button>
                            ))}
                        </div>
                        </div>
                    )}
                    </div>
                ))}
                </div>

                {/* Table Footer */}
                <div className="p-4 border-t text-sm text-gray-500">Viewing 1-3 of 3 docs</div>
            </div>
            </div>

            </div>

            <div className="col-span-2" style={{position: "relative", top: "-50px"}}>

            <div><ActiveMembers/></div>
            <div className='mt-8'><Groups/></div>
            <div className='mt-8'><RecentTopics/></div>
            <div className='mt-8'><ContactUs/></div>


            </div>

            </div>
            
        </div>
    );
};

export default BusinessDocs;