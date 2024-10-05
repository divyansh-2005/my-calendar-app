import { CalendarCheck, IndianRupee } from "lucide-react";
import React from "react";

export const Sidebar = ({ onAddExpense, onAddTodo }) => {
  return (
    <div className="relative w-[12vw] bg-[#1a1a1a] h-screen border-r border-white p-2 space-y-6">
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