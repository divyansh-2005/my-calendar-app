import React, { useContext } from "react";
import "../styles/HomePage.css";
import { useNavigate } from "react-router-dom";
import Calendar from "../components/Calendar";
import ExpenseBox from "../components/ExpenseBox";
import ToDoBox from "../components/ToDoBox";
import { Sidebar } from "../components/Sidebar";
import { ThemeContext } from "../utils/ThemeContext";

const HomePage = ({
  selectedDate,
  totalExpense,
  onDateClick,
  setTotalExpense,
}) => {
  const navigate = useNavigate();
  const themeCtx = useContext(ThemeContext);

  const handleExpenseBoxClick = () => {
    const dateStr = selectedDate.toISOString().substr(0, 10);
    navigate(`/expenses?date=${dateStr}`);
  };

  const handleAddExpense = () => {
    const dateStr = selectedDate.toISOString().substr(0, 10);
    navigate(`/expenses?date=${dateStr}`);
  };

  const handleAddTodo = () => {
    const dateStr = selectedDate.toISOString().substr(0, 10);
    navigate(`/todos?date=${dateStr}`);
  };

  return (
    <div
      className={`flex items-start justify-start w-full transition-all duration-300 ease-in-out ${themeCtx.theme === "light" ? "bg-customWhite text-customGray" : "bg-customGray text-customWhite"}`}
    >
      <Sidebar onAddExpense={handleAddExpense} onAddTodo={handleAddTodo} />
      <div className="home-page flex-1">
        <Calendar onDateClick={onDateClick} />
        <h2>
          Selected Date:{" "}
          {selectedDate ? selectedDate.toLocaleDateString() : "None"}
        </h2>
        <div className="flex flex-col lg:flex-row">
          <ExpenseBox
            selectedDate={selectedDate}
            totalExpense={totalExpense}
            setTotalExpense={setTotalExpense}
            onClick={handleExpenseBoxClick}
          />
          <ToDoBox selectedDate={selectedDate} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
