import React, { useState } from 'react';
import '../styles/Calendar.css';

const Calendar = ({ onDateClick }) => {
  const [activeDay, setActiveDay] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

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
    <div className="calendar">
      <div className="calendar-nav">
        <div className="nav-left">
          <div className="current-month">{`${monthNames[currentMonth]} ${currentYear}`}</div>
        </div>
        <div className="nav-right">
          <button className="btn" onClick={handlePrevMonth}>
            &lt;
          </button>
          <button className="btn" onClick={handleNextMonth}>
            &gt;
          </button>
        </div>
      </div>
      <div className="week-days">
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
          <div key={day} className="week-day">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-grid">
        {daysArray.map((day) => (
          <div
            key={day}
            className={`calendar-day ${day === activeDay ? 'active' : ''} ${
              day === currentDay && currentMonth === currentMonthIndex && currentYear === currentYearNum ? 'current' : ''
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
