import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ExpenseBox.css';
import axios from 'axios';

const ExpenseBox = ({ selectedDate, totalExpense, setTotalExpense }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTotalExpense = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/expenses/${selectedDate.toISOString().substr(0, 10)}`);
        const total = response.data.reduce((total, expense) => total + expense.amount, 0);
        setTotalExpense(total);
      } catch (error) {
        console.error('Error fetching total expense:', error);
      }
    };

    if (selectedDate) {
      fetchTotalExpense();
    }
  }, [selectedDate, setTotalExpense]);

  const handleClick = () => {
    navigate(`/expenses?date=${selectedDate.toISOString().substr(0, 10)}`);
  };

  return (
    <div className="expense-box" onClick={handleClick}>
      <h3>Total Expenses</h3>
      <p>${totalExpense.toFixed(2)}</p>
    </div>
  );
};

export default ExpenseBox;
