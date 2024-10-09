import { CalendarCheck, IndianRupee } from "lucide-react";
import React from "react";

export const Sidebar = ({ onAddExpense, onAddTodo }) => {
  return (
    <div className="relative w-full md:w-[12vw] bg-[#1a1a1a]  border-r border-white p-2 space-y-6 overflow-x-hidden">
      <div 
        className="w-full p-4 flex flex-col justify-center items-center gap-2 rounded-md hover:bg-[#292929] cursor-pointer"
        onClick={onAddExpense}
      >
        <IndianRupee className="text-2xl md:text-4xl" />
        <p className="text-sm md:text-base">Add Expenses</p>
      </div>
      <div 
        className="w-full p-4 flex flex-col justify-center items-center gap-2 rounded-md hover:bg-[#292929] cursor-pointer"
        onClick={onAddTodo}
      >
        <CalendarCheck className="text-2xl md:text-4xl" />
        <p className="text-sm md:text-base">Add Todo</p>
      </div>
    </div>
  );
};