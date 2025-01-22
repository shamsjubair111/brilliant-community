import React from 'react';
import userImage from "../../assets/images/user.jpg";

const PostList = () => {
    return (
        <div>

               {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className="bg-white divide-y m-5 rounded-xl"
                    >
                      {/* Quote Post */}
                      <div className="p-4">
                        <div className="flex items-center gap-3 mb-4">
                          <img src={userImage} alt="Sarah" className="w-10 h-10 rounded-full" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">Sarah Jayne</span>
                              <span className="text-sm text-gray-500">posted an update in the group</span>
                              <span className="text-blue-600">Art & Entertainment</span>
                            </div>
                            <span className="text-sm text-gray-500">2 weeks ago</span>
                          </div>
                        </div>
                        <div
                          className="p-6 rounded-lg mb-4 flex flex-col justify-center items-end"
                          style={{ backgroundColor: "#8484fe", height: "300px" }}
                        >
                          <p className="text-lg mb-2 text-white font-bold text-4xl">
                            "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more."
                          </p>
                          <p className="text-white mt-4">-Angelita Lim</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="flex -space-x-1">
                              <span className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full">
                                👍
                              </span>
                              <span className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full">
                                ❤️
                              </span>
                            </div>
                            <span className="text-sm text-gray-500">and 4 others</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            <button className="text-gray-500">0 comments</button>
                            <button className="text-blue-600">Share</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
            
        </div>
    );
};

export default PostList;