import React from 'react';
import userImage from "../assets/images/user.jpg";
import BusinessPageHeader from '../components/common/BusinessPageHeader';
import ActiveMembers from '../components/common/ActiveMembers';
import RecentTopics from '../components/common/RecentTopics';
import ContactUs from '../components/common/ContactUs';
import Groups from '../components/common/Groups';

const BusinessFriendsSelect = () => {

    const friends = [
        {
          id: 1,
          name: "Esther Howard",
          avatar: "/placeholder.svg?height=40&width=40",
          verified: true,
          selected: false,
        },
        {
          id: 2,
          name: "Brian Jimenez",
          avatar: "/placeholder.svg?height=40&width=40",
          verified: true,
          selected: true,
        },
        {
          id: 3,
          name: "Kathrin Hopkins",
          avatar: "/placeholder.svg?height=40&width=40",
          verified: true,
          selected: true,
        },
        {
          id: 4,
          name: "Marc Vandeweer",
          avatar: "/placeholder.svg?height=40&width=40",
          verified: true,
          selected: false,
        },
        {
          id: 5,
          name: "Ray Richardson",
          avatar: "/placeholder.svg?height=40&width=40",
          verified: true,
          selected: false,
        },
        {
          id: 6,
          name: "Kate Platonova",
          avatar: "/placeholder.svg?height=40&width=40",
          verified: true,
          selected: false,
        },
      ]

    return (
       
        <div>

            <BusinessPageHeader/>

            
            {/* Grid */}

            <div className="grid grid-cols-12 p-6">

            <div className="col-span-9 px-12" style={{position: 'relative', top: "-70px"}}>

           
            

            {/* friends list */}

            <div className="max-w-4xl p-6">
      <div className="flex gap-6">
        {/* Left Column - Friend List */}
        <div className="flex-1">
          {/* Tabs */}
          <div className="flex gap-4 mb-4">
            <button className="text-blue-600 font-medium text-sm flex items-center">
              My Friends
              <span className="ml-1 bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full text-xs">6</span>
            </button>
            <button className="text-gray-600 font-medium text-sm flex items-center">
              All Members
              <span className="ml-1 bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full text-xs">16</span>
            </button>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search friend..."
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

          {/* Friends List */}
          <div className="space-y-2">
            {friends.map((friend) => (
              <div
                key={friend.id}
                className="flex items-center justify-between p-2 rounded-lg "
              >
                <div className="flex items-center gap-3">
                  <img src={userImage} alt={friend.name} className="w-10 h-10 rounded-full" />
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium text-gray-900">{friend.name}</span>
                    {friend.verified && (
                      <svg className="w-4 h-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <input
                  type="checkbox"
                        checked={friend.selected}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        onChange={() => {}}
                        />
                    </div>
                    ))}
                </div>
                </div>

                {/* Right Column - Selected Friends */}
                <div className="w-72">
                <div className=" rounded-lg border p-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-4">Selected Friends (2)</h3>
                    <div className="space-y-2">
                    {friends
                        .filter((friend) => friend.selected)
                        .map((friend) => (
                        <div key={friend.id} className="flex items-center justify-between p-2 rounded-lg">
                            <div className="flex items-center gap-2">
                            <img
                                src={userImage}
                                alt={friend.name}
                                className="w-8 h-8 rounded-full"
                            />
                            <div className="flex items-center gap-1">
                                <span className="text-sm font-medium text-gray-900">{friend.name}</span>
                                {friend.verified && (
                                <svg className="w-4 h-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                    fillRule="evenodd"
                                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    />
                                </svg>
                                )}
                            </div>
                            </div>
                            <button className="text-gray-400 hover:text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </button>
                        </div>
                        ))}
                    </div>
                    <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 font-medium text-sm">
                    Send Invites
                    </button>
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

export default BusinessFriendsSelect;