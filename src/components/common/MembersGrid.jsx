import React from 'react';
import userImage from "../../assets/images/user.jpg";

const MembersGrid = () => {

    const members = [
        {
          id: 1,
          name: "Esther Howard",
          username: "@Estherward",
          location: "Oklahoma City, Oklahoma",
          joinTime: "Join 31 minutes ago",
          verified: true,
          status: "add"
        },
        {
          id: 2,
          name: "Brian Jimenez",
          username: "@Brian_jim",
          location: "Oklahoma City, Oklahoma",
          joinTime: "Join 31 minutes ago",
          verified: true,
          status: "cancel"
        },
        {
          id: 3,
          name: "Kathrin Hopkins",
          username: "@Kathrin_Hops",
          location: "Oklahoma City, Oklahoma",
          joinTime: "Join 31 minutes ago",
          verified: true,
          status: "add"
        },
        {
          id: 4,
          name: "Kristin Watson",
          username: "@kristin_wat",
          location: "Oklahoma City, Oklahoma",
          joinTime: "Join 31 minutes ago",
          verified: true,
          status: "add"
        },
        {
          id: 5,
          name: "Jessica CJ",
          username: "@JessicaCJ",
          location: "Oklahoma City, Oklahoma",
          joinTime: "Join 2 hours ago",
          verified: true,
          status: "profile"
        },
        {
          id: 6,
          name: "Marc Vanderveer",
          username: "@Marc_Veer",
          location: "Oklahoma City, Oklahoma",
          joinTime: "Join 31 minutes ago",
          verified: true,
          status: "cancel"
        },
        {
            id: 7,
            name: "Kristin Watson",
            username: "@kristin_wat",
            location: "Oklahoma City, Oklahoma",
            joinTime: "Join 31 minutes ago",
            verified: true,
            status: "add"
          },
          {
            id: 8,
            name: "Jessica CJ",
            username: "@JessicaCJ",
            location: "Oklahoma City, Oklahoma",
            joinTime: "Join 2 hours ago",
            verified: true,
            status: "profile"
          },
          {
            id: 9,
            name: "Marc Vanderveer",
            username: "@Marc_Veer",
            location: "Oklahoma City, Oklahoma",
            joinTime: "Join 31 minutes ago",
            verified: true,
            status: "cancel"
          },
      ]

    return (

        <div>
            
            {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            {/* Banner Image */}
            <div className="h-32 relative">
              <img src={userImage} alt="" className="w-full h-full object-cover" />
              <div className="absolute -bottom-6 left-4">
                <img
                  src={userImage}
                  alt={member.name}
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-4 pt-8">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium text-gray-900">{member.name}</h3>
                {member.verified && (
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <p className="text-sm text-gray-500 mb-1">{member.username}</p>
              <p className="text-sm text-gray-500 mb-4">{member.location}</p>
              <p className="text-xs text-gray-400 mb-4">{member.joinTime}</p>

              {/* Action Buttons */}
              <div className="flex gap-2">
                {member.status === "add" && (
                  <>
                    <button className="flex-1 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100">
                      Add Friend
                    </button>
                    <button className="flex-1 bg-gray-50 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100">
                      Messages
                    </button>
                  </>
                )}
                {member.status === "cancel" && (
                  <>
                    <button className="flex-1 bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-100">
                      Cancel Request
                    </button>
                    <button className="flex-1 bg-gray-50 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100">
                      Messages
                    </button>
                  </>
                )}
                {member.status === "profile" && (
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                    Profile Setting
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

        </div>
    );
};

export default MembersGrid;