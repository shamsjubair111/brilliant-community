import React from 'react';

const RSS = () => {
    return (

           <div className="bg-white p-4 border-b m-5 rounded-xl">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.18 15.64a2.18 2.18 0 112.18 2.18 2.18 2.18 0 01-2.18-2.18zM4 4.44A15.56 15.56 0 0119.56 20h-2.83A12.73 12.73 0 004 7.27V4.44zm0 5.66a9.9 9.9 0 019.9 9.9h-2.83A7.07 7.07 0 004 12.93V10.1z"/>
                          </svg>
                          <span className="font-medium">RSS</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">Show:</span>
                          <button className="text-sm text-gray-700">Everything</button>
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
            </div>

    );
};

export default RSS;