import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ToDoBox.css';
import axios from 'axios';

const ToDoBox = ({ selectedDate }) => {
  const [totalTodos, setTotalTodos] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTotalTodos = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/todos/${selectedDate.toISOString().substr(0, 10)}`);
        setTotalTodos(response.data.length);
      } catch (error) {
        console.error('Error fetching total todos:', error);
      }
    };

    if (selectedDate) {
      fetchTotalTodos();
    }
  }, [selectedDate]);

  const handleClick = () => {
    navigate(`/todos?date=${selectedDate.toISOString().substr(0, 10)}`);
  };

  return (
    <div className="todo-box" onClick={handleClick}>
      <h3>Total To-Dos</h3>
      <p>{totalTodos}</p>
    </div>
  );
};

export default ToDoBox;
