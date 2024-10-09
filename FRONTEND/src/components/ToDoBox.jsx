import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ToDoBox.css";
import axiosInstance from "../utils/axiosInstance";
import { ThemeContext } from "../utils/ThemeContext";

const ToDoBox = ({ selectedDate }) => {
  const [totalTodos, setTotalTodos] = useState(0);
  const navigate = useNavigate();
  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    const fetchTotalTodos = async () => {
      try {
        const response = await axiosInstance.get(
          `/todos/${selectedDate.toISOString().substr(0, 10)}`
        );
        setTotalTodos(response.data.length);
      } catch (error) {
        console.error("Error fetching total todos:", error);
      }
    };

    if (selectedDate) {
      fetchTotalTodos();
    }
  }, [selectedDate]);

  return (
    <div
      className={`${themeCtx.theme === "light" ? "bg-customWhite text-customGray" : "bg-customGray text-customWhite"} todo-box`}
    >
      <h3>Total To-Dos</h3>
      <p>{totalTodos}</p>
    </div>
  );
};

export default ToDoBox;
