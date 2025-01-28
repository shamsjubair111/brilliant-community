import React from 'react';
import BusinessPageHeader from '../components/common/BusinessPageHeader';
import userImage from "../assets/images/user.jpg";
import ActiveMembers from '../components/common/ActiveMembers';
import Groups from '../components/common/Groups';
import RecentTopics from '../components/common/RecentTopics';
import ContactUs from '../components/common/ContactUs';

const BusinessMembers = () => {

    const members = [
        {
          id: 1,
          name: "Esther Howard",
          avatar: "/placeholder.svg?height=40&width=40",
          location: "Oklahoma City, Oklahoma",
          joinTime: "Join 17 minutes ago",
          verified: true,
          status: "add", // add, cancel, unfriend
        },
        {
          id: 2,
          name: "Brian Jimenez",
          avatar: "/placeholder.svg?height=40&width=40",
          location: "Oklahoma City, Oklahoma",
          joinTime: "Join 19 minutes ago",
          verified: true,
          status: "cancel",
        },
        {
          id: 3,
          name: "Kathryn Hopkins",
          avatar: "/placeholder.svg?height=40&width=40",
          location: "Oklahoma City, Oklahoma",
          joinTime: "Join 21 minutes ago",
          verified: true,
          status: "unfriend",
        },
        {
          id: 4,
          name: "Jessica Cl",
          avatar: "/placeholder.svg?height=40&width=40",
          location: "Oklahoma City, Oklahoma",
          joinTime: "Join 17 minutes ago",
          verified: true,
          status: "none",
        },
        {
          id: 5,
          name: "Marc Vandeweer",
          avatar: "/placeholder.svg?height=40&width=40",
          location: "Oklahoma City, Oklahoma",
          joinTime: "Join 27 minutes ago",
          verified: true,
          status: "unfriend",
        },
        {
          id: 6,
          name: "Ray Richardson",
          avatar: "/placeholder.svg?height=40&width=40",
          location: "Oklahoma City, Oklahoma",
          joinTime: "Join 2 weeks 2 days ago",
          verified: true,
          status: "add",
        },
        {
          id: 7,
          name: "Kate Platonova",
          avatar: "/placeholder.svg?height=40&width=40",
          location: "Oklahoma City, Oklahoma",
          joinTime: "Join 1 year ago",
          verified: true,
          status: "add",
        },
      ]

    return (

        <div>

            <BusinessPageHeader/>

            
            {/* Grid */}

            <div className="grid grid-cols-12 p-6">

            <div className="col-span-9 px-12" style={{position: 'relative', top: "-50px"}}>

           
            {/* Search and Sort */}
            <div className="p-4 bg-white flex items-center justify-between mb-6 gap-4 rounded-md">
                <div className="relative flex-1 max-w-md">
                <input
                    type="text"
                    placeholder="Search member..."
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
                <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Order By:</span>
                <select className="text-sm border rounded-lg px-3 py-2">
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Most Replies</option>
                </select>
                </div>
            </div>

            {/* member list */}

            <div className=" mx-auto rounded-md">
      {/* Header */}
      <div className="px-6 py-4 border-b">
        <h2 className="text-sm font-medium text-gray-900">Member ({members.length})</h2>
      </div>

      {/* Members List */}
      <div className="">
        {members.map((member) => (
          <div key={member.id} className="flex items-center justify-between px-6 py-4">
            {/* Member Info */}
            <div className="flex items-center gap-3">
              <img src={userImage} alt={member.name} className="w-10 h-10 rounded-full" />
              <div>
                <div className="flex items-center gap-1">
                  <h3 className="text-sm font-medium text-gray-900">{member.name}</h3>
                  {member.verified && (
                    <svg className="w-4 h-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-gray-500">{member.location}</span>
                  <span className="text-xs text-gray-500">{member.joinTime}</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            {member.status === "add" && (
              <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium hover:bg-blue-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                Add Friend
              </button>
            )}
            {member.status === "cancel" && (
              <button className="px-3 py-1.5 rounded-lg bg-gray-50 text-gray-600 text-sm font-medium hover:bg-gray-100">
                Cancel Request
              </button>
            )}
            {member.status === "unfriend" && (
              <button className="px-3 py-1.5 rounded-lg bg-gray-50 text-gray-600 text-sm font-medium hover:bg-gray-100">
                Unfriend
              </button>
            )}
                </div>
                ))}
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

export default BusinessMembers;