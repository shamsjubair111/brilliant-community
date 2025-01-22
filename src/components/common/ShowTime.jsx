import React, { useEffect, useState } from 'react';

const ShowTime = () => {

    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date())
      }, 1000)
  
      return () => clearInterval(timer)
    }, [])
  
    const formatTime = (date) => {
      return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    }
  
    const formatDate = (date) => {
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    }


    return (

            <div className="max-w-md mx-auto">
        <div className="bg-[#4338ca] text-white rounded-2xl p-4 flex items-center justify-between">
            {/* Time and Date */}
            <div>
            <div className="text-2xl font-semibold">{formatTime(currentTime)}</div>
            <div className="text-sm opacity-90">{formatDate(currentTime)}</div>
            </div>

            {/* Weather */}
            <div className="flex items-center gap-2">
            {/* Cloud with Rain Icon (CSS only) */}
            <div className="relative w-5 h-5">
                <div className="absolute w-4 h-4 rounded-full border-2 border-current top-0 left-1/2 -translate-x-1/2"></div>
                <div className="absolute w-[1px] h-2 bg-current bottom-0 left-1/2 -translate-x-1/2 transform -rotate-15"></div>
                <div className="absolute w-[1px] h-2 bg-current bottom-0 left-[35%] transform -rotate-15"></div>
                <div className="absolute w-[1px] h-2 bg-current bottom-0 right-[35%] transform -rotate-15"></div>
            </div>
            <div className="flex items-center gap-1">
                <span className="text-sm">Heavy Rain</span>
                <span className="text-lg">24°</span>
            </div>
            </div>
            
        </div>
        </div>
        
    );
};

export default ShowTime;