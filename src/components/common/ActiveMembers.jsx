import React from 'react';
import userImage from "../../assets/images/user.jpg";

const ActiveMembers = () => {
    return (
        
         <div className="mb-8">
                    <h3 className="font-semibold mb-3">Active members</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          src={userImage}
                          alt={`Member ${i + 1}`}
                          className="w-8 h-8 rounded-full mr-1"
                        />
                      ))}
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                        +3
                      </div>
                    </div>
                  </div>

    );
};

export default ActiveMembers;