import React from 'react';
import userImage from "../../assets/images/user.jpg";

const MyDay = () => {
    return (
        <div>

             <div className="border-b px-4">
                          <div className="flex justify-between items-center mb-4">
                           
                          </div>
                          {/* Profile Images Row */}
                          <div className="flex">
                            {[...Array(7)].map((_, i) => (
                             <div className='m-2'>
                                 <img
                                key={i}
                                src={userImage}
                                alt={`User ${i + 1}`}
                                className="w-20 h-20 rounded-full border-2 mr-3" style={{borderColor: "#142d6f"}}
                              />
                              <p className='mt-2'>{i === 0 ? "Your story" : "Randy Orton"}</p>
                            </div>
                            ))}
                          </div>
                        </div>
            
                        <div className='ml-4 mt-8'>
                        <h1 className="text-3xl font-bold mb-1" style={{color: "#142d6f"}}>Amazing Newsfeed</h1>
                        <p className="text-sm text-gray-500 mb-4" style={{color: "#142d6f"}}>Check what your friends have been up to!</p>
                        </div>
            
        </div>
    );
};

export default MyDay;