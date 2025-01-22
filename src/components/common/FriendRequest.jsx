import React from 'react';
import userImage from "../../assets/images/user.jpg";

const FriendRequest = () => {
    return (
        
        <div className="py-4 rounded-lg max-w-sm">
        <h2 className="text-blue-900 font-semibold mb-3">Friend request</h2>
        
        <div className="flex items-center gap-3">
          <img 
            src={userImage}
            alt="Brooklyn Simmons" 
            className="w-10 h-10 rounded-full"
          />
          
          <div className="flex-1">
            <h3 className="text-gray-900 font-semibold">Brooklyn Simmons</h3>
            <p className="text-gray-500 text-sm">1 days ago</p>
          </div>
        </div>
  
        <div className="flex gap-2 mt-3">
          <button className="px-4 py-1.5 bg-blue-900 text-white text-sm font-medium rounded-full hover:bg-blue-800">
            Approved
          </button>
          <button className="px-4 py-1.5 text-gray-700 text-sm font-medium rounded-full" style={{backgroundColor: "#e2eaff", color: "#142d6f"}}>
            Delete
          </button>
        </div>
      </div>

    );
};

export default FriendRequest;