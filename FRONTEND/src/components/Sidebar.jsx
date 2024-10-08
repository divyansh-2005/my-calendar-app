import { CalendarCheck, IndianRupee } from "lucide-react";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

export const Sidebar = ({ onAddExpense, onAddTodo }) => {
  const themeCtx = useContext(ThemeContext);
  return (
    <div
      className={`relative w-[12vw] ${themeCtx.theme === "light" ? "bg-customWhite text-customGray" : "bg-customGray text-customWhite"} h-screen border-r border-white p-2 space-y-6`}
    >
      <div
        className="w-full p-4 flex flex-col justify-center items-center gap-2 rounded-md hover:bg-[#292929] cursor-pointer"
        onClick={onAddExpense}
      >
        <IndianRupee />
        <p>Add Expenses</p>
      </div>
      <div
        className="w-full p-4 flex flex-col justify-center items-center gap-2 rounded-md hover:bg-[#292929] cursor-pointer"
        onClick={onAddTodo}
      >
        <CalendarCheck />
        <p>Add Todo</p>
      </div>
    </div>
  );
};
