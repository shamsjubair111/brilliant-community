import React from 'react';

const UpcomingEvent = () => {

    const events = [
        {
          id: 1,
          date: 15,
          month: 'MAY',
          title: 'DISCOVER YOURSELF',
          location: '44B venue New York, NY US',
          price: 25.00
        },
        {
          id: 2,
          date: 28,
          month: 'MAY',
          title: 'EVENT TITLE',
          location: 'Boston Holt, New York',
          price: 75.00
        },
        {
          id: 3,
          date: 30,
          month: 'MAY',
          title: 'DINNER PARTY',
          location: 'Roosevelt Hotel',
          price: 125.00
        }
      ];

      
    return (

       

        <div className="p-4 rounded-lg max-w-md">
            <h2 className="text-navy-900 font-semibold text-lg mb-4">Upcoming Event</h2>
            
            <div className="space-y-4">
                {events.map((event) => (
                <div key={event.id} className="flex items-start gap-4 pb-4 cursor-pointer">
                    <div className="flex flex-col items-center min-w-[50px]">
                    <span className="text-xl font-bold text-gray-900">{event.date}</span>
                    <span className="text-sm text-white font-medium px-2 py-0.5 rounded" style={{backgroundColor: "#4d4efe"}}>
                        {event.month}
                    </span>
                    </div>
                    
                    <div className="flex-1">
                    <h3 className="text-blue-900 font-semibold mb-1">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-1">{event.location}</p>
                    <p className="text-gray-900 font-semibold">${event.price.toFixed(2)}</p>
                    </div>
                </div>
                ))}
            </div>

            <button className="text-blue-500 text-sm flex items-center mt-4">
                View all
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7"
                />
                </svg>
            </button>
            </div>
            
       

    );
};

export default UpcomingEvent;