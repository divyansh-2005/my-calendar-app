import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ExpenseBox.css";
import axios from "axios";
import { ThemeContext } from "../utils/ThemeContext";

const ExpenseBox = ({ selectedDate, totalExpense, setTotalExpense }) => {
  const navigate = useNavigate();
  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    const fetchTotalExpense = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/expenses/${selectedDate.toISOString().substr(0, 10)}`
        );
        const total = response.data.reduce(
          (total, expense) => total + expense.amount,
          0
        );
        setTotalExpense(total);
      } catch (error) {
        console.error("Error fetching total expense:", error);
      }
    };

    if (selectedDate) {
      fetchTotalExpense();
    }
  }, [selectedDate, setTotalExpense]);

  return (
    <div
      className={`${themeCtx.theme === "light" ? "bg-customWhite text-customGray" : "bg-customGray text-customWhite"} expense-box`}
    >
      <h3>Total Expenses</h3>
      <p>${totalExpense.toFixed(2)}</p>
    </div>
  );
};

export default ExpenseBox;
