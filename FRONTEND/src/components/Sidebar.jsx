import { CalendarCheck, IndianRupee } from "lucide-react";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

export const Sidebar = ({ onAddExpense, onAddTodo }) => {
  const themeCtx = useContext(ThemeContext);
  return (
    <div
      className={`relative w-[12vw] transition-all duration-300 ease-in-out ${themeCtx.theme === "light" ? "bg-customWhite text-customGray" : "bg-customGray text-customWhite"} h-screen border-r border-white p-2 space-y-6`}
    >
      <div
        className={`w-full p-4 flex flex-col justify-center items-center gap-2 rounded-md transition-all duration-300 ease-in-out ${themeCtx.theme === "light" ? "hover:bg-[#F6F5F2]" : "hover:bg-[#352F44]"}  cursor-pointer`}
        onClick={onAddExpense}
      >
        <IndianRupee />
        <p>Add Expenses</p>
      </div>
      <div
        className={`w-full p-4 flex flex-col justify-center items-center gap-2 rounded-md transition-all duration-300 ease-in-out ${themeCtx.theme === "light" ? "hover:bg-[#F6F5F2]" : "hover:bg-[#352F44]"}  cursor-pointer`}
        onClick={onAddTodo}
      >
        <CalendarCheck />
        <p>Add Todo</p>
      </div>
    </div>
  );
};
