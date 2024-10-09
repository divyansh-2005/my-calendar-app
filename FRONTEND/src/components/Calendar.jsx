import React, { useState } from 'react';

const Calendar = ({ onDateClick }) => {
  const [activeDay, setActiveDay] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handleDayClick = (day) => {
    setActiveDay(day);
    const selectedDate = new Date(currentYear, currentMonth, day);
    onDateClick(selectedDate);
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prevYear) => prevYear - 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prevYear) => prevYear + 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth + 1);
    }
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInCurrentMonth = getDaysInMonth(currentMonth, currentYear);
  const daysArray = Array.from({ length: daysInCurrentMonth }, (_, index) => index + 1);

  const today = new Date();
  const currentDay = today.getDate();
  const currentMonthIndex = today.getMonth();
  const currentYearNum = today.getFullYear();

  return (
    <div className="m-2 md:m-5 overflow-x-hidden">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center ml-2 md:ml-5">
          <div className="font-bold text-sm md:text-base">{`${currentMonth + 1}/${currentYear}`}</div>
        </div>
        <div className="flex items-center">
          <button className="m-1 p-1 md:m-2 md:p-2 bg-gray-800 text-white border border-transparent rounded-md cursor-pointer font-medium text-xs md:text-sm transition-colors duration-200 hover:border-blue-500" onClick={handlePrevMonth}>
            &lt;
          </button>
          <button className="m-1 p-1 md:m-2 md:p-2 bg-gray-800 text-white border border-transparent rounded-md cursor-pointer font-medium text-xs md:text-sm transition-colors duration-200 hover:border-blue-500" onClick={handleNextMonth}>
            &gt;
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 md:gap-2 mb-2 text-center">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day} className="font-bold text-xs md:text-sm">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 md:gap-2">
        {daysArray.map((day) => (
          <div
            key={day}
            className={`flex justify-center items-center h-10 w-10 md:h-16 md:w-16 bg-gray-800 text-white rounded-md cursor-pointer border border-transparent transition-all duration-300 text-xs md:text-base ${day === activeDay ? 'border-2 border-white' : ''} ${
              day === currentDay && currentMonth === currentMonthIndex && currentYear === currentYearNum ? 'bg-blue-600' : ''
            }`}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar; 