import React, { useState } from 'react';
import userImage from "../../assets/images/user.jpg";

const CreatePost = () => {

    const [postText, setPostText] = useState('');

    return (
        
          <div className="bg-white p-4 border-b rounded-xl mx-5">
                      
                      <div className="flex gap-3 mb-4">
                        <img src={userImage} alt="Profile" className="w-10 h-10 rounded-full" />
                        <div className="flex-1">
                          <div className="items-center gap-2 mb-2">
                            <p className="font-medium mb-1">Jessica CJ</p>
                            <p className="text-sm text-gray-500">Status update</p>
                          </div>
                          <input
                            style={{position: "relative", right: "50px", width: "106%"}}
                            type="text"
                            placeholder="What's new, here?"
                            className="w-full border rounded-lg px-4 py-2 my-4"
                            value={postText}
                            onChange={(e) => setPostText(e.target.value)}
                          />
                        </div>
                      </div>
        
        
                      <div className="flex justify-between items-center mt-8">
                        <div className="gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-full">
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </button>
                        </div>
                        <div>
                        <button className="px-6 py-2 bg-white rounded-lg" style={{color: "#142d6f"}}>
                          Discard
                        </button>
                        <button className="px-6 py-2 bg-blue-900 text-white rounded-full">
                          Post
                        </button>
                        </div>
                      </div>
                    </div>

    );
};

export default CreatePost;