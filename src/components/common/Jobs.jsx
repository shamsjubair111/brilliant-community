import React from 'react';
import news from "../../assets/images/news.jpg";

const Jobs = () => {

    const jobs = [
        {
          id: 1,
          title: "Data Engineer",
          company: "Google Inc",
          location: "Anywhere",
          type: "Full Time",
          posted: "Posted 1 month ago",
          logoBackground: "bg-green-100",
        },
        {
          id: 2,
          title: "Senior Technician - Trading Enterprise",
          company: "Tech bits",
          location: "New York",
          type: "Full Time",
          posted: "Posted 1 month ago",
          logoBackground: "bg-purple-100",
        },
        {
          id: 3,
          title: "Social Media And Public Relation Exe...",
          company: "Rhino Technologies",
          location: "Singapore",
          type: "Full Time",
          posted: "Posted 1 month ago",
          logoBackground: "bg-teal-100",
        },
        {
          id: 4,
          title: "Blockchain Developer",
          company: "Apollo Finvest",
          location: "Los Angeles (remote)",
          type: "Full Time",
          posted: "Posted 1 month ago",
          logoBackground: "bg-orange-100",
        },
        {
          id: 5,
          title: "CRM Specialist",
          company: "Zoho Creator",
          location: "Anywhere",
          type: "Full Time",
          posted: "Posted 1 month ago",
          logoBackground: "bg-purple-100",
        },
      ]


    return (


        <div className="max-w-5xl mx-auto bg-white px-6 py-4 rounded-md">
      {/* Header */}
      <h1 className="text-xl font-semibold text-gray-900 mb-6">Jobs</h1>

      {/* Search Section */}
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-md" style={{backgroundColor: "#e2eaff"}}>
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Keywords"
                className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          </div>
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Location"
                className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
          <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
            Search
          </button>
        </div>

        {/* Filter Checkboxes */}
        <div className="flex flex-wrap gap-4 mt-4">
          {["Freelance", "Full Time", "Internship", "Part Time", "Temporary"].map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                defaultChecked={["Freelance", "Full Time", "Internship", "Part Time"].includes(type)}
              />
              <span className="text-sm text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex items-center gap-4 p-4 rounded-lg"
          >
            <div className={`p-3 rounded-lg ${job.logoBackground}`}>
              <img src={news} alt={job.company} className="w-8 h-8" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-semibold text-gray-900 truncate">{job.title}</h2>
              <p className="text-sm text-gray-600">{job.company}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">{job.location}</p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-blue-900">{job.type}</span>
                <span className="text-sm text-gray-500">{job.posted}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <button className="flex items-center gap-2 text-blue-600 mt-6 hover:text-blue-700">
        <span>Load more</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>


    );
};

export default Jobs;