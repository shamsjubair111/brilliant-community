import React, { useState } from 'react';

const Calendar = () => {

    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];


    return (

        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">{months[currentMonth]} {currentYear}</h2>
        <div className="flex space-x-2">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={handlePreviousMonth}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={handleNextMonth}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-7 gap-2 text-center text-gray-500">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
          <div
            key={day}
            className={`rounded-full p-1 ${day === 25 ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
            style={{borderRadius: "50%"}}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="mt-4">
        <div className="bg-gray-100 rounded-md p-4">
          <h3 className="text-lg font-bold mb-2">March 15</h3>
          <p className="text-gray-500">Discover Yourself!</p>
          <p className="text-gray-500">8:00am - 10:00am EST</p>
        </div>
        <div className="bg-gray-100 rounded-md p-4 mt-4">
          <h3 className="text-lg font-bold mb-2">March 24</h3>
          <p className="text-gray-500">Dinner Party</p>
          <p className="text-gray-500">6:00pm - 10:00pm EST</p>
        </div>
      </div>
    </div>

    );
};

export default Calendar;