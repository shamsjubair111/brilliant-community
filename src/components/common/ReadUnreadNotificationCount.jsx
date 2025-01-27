import React from 'react';
import ActiveMembers from './ActiveMembers';
import LatestActivities from './LatestActivities';
import Members from './Members';

const ReadUnreadNotificationCount = () => {

    const notifications = [
        {
          id: 1,
          from: "Kristin Watson",
          message: "sent you a post",
          timeAgo: "2 days 3 hours ago",
          read: false,
        },
        {
          id: 2,
          from: "Ray Richardson",
          message: "sent you a friendship request",
          timeAgo: "4 days 5 hours ago",
          read: false,
        },
        {
          id: 3,
          from: "Kristin Watson",
          message: "accept your friend request",
          timeAgo: "1 week ago",
          read: false,
        },
      ]

    return (

      
        <div className="grid grid-cols-12 gap-6 p-6">
        {/* Left Column (9/12 space) */}
        <div className="col-span-9 rounded-lg">
        <div className="p-4">
      <div className="rounded-m">
        {/* Header */}
        <div className="bg-white rounded-md flex items-center justify-between p-4 border-b">
          <div className="flex gap-4">
            <button className="text-blue-600 font-medium flex items-center gap-2">
              Unread
              <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">3</span>
            </button>
            <button className="text-gray-500 hover:text-gray-700">Read</button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Order By:</span>
            <select className="text-sm border-0 font-medium focus:ring-0">
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>

        {/* Notifications List */}
        <div className="divide-y mt-4 bg-white rounded-md">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-center gap-4 p-4">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">{notification.from}</span> {notification.message}
                </p>
                <p className="text-xs text-gray-500">{notification.timeAgo}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                  aria-label="Reply"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                    />
                  </svg>
                </button>
                <button
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                  aria-label="Delete"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bulk Actions */}
        <div className="flex items-center gap-2 p-4">
          <span className="text-sm text-gray-600">Bulk Actions:</span>
          <button className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300" style={{border: "1px solid #142d6f"}}>
            Reply
          </button>
        </div>
      </div>
    </div>
        </div>

        {/* Right Column (3/12 space) */}
        <div className="col-span-3 rounded-lg p-6">
            <div className='px-4'><ActiveMembers/></div>
            <div className='px-4 mt-8'><LatestActivities/></div>
            <div className='mt-8 shadow-sm rounded-md'><Members/></div>
        </div>
        </div>

    );
};

export default ReadUnreadNotificationCount;