import React, { useState, useEffect } from 'react';
import '../styles/ExpensePage.css';
import axios from 'axios';

const ExpensePage = ({ selectedDate, expenses, setExpenses, setTotalExpense }) => {
  const [form, setForm] = useState({
    amount: '',
    category: '',
    description: ''
  });
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    setForm({
      amount: '',
      category: '',
      description: ''
    });
    setEditingExpense(null);
  }, [selectedDate]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const dateStr = selectedDate.toISOString().substr(0, 10);
        const response = await axios.get(`http://localhost:5000/api/expenses/${dateStr}`);
        setExpenses(response.data);

        const total = response.data.reduce((total, expense) => total + expense.amount, 0);
        setTotalExpense(total);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchExpenses();
  }, [selectedDate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dateWithoutTime = new Date(selectedDate);
    dateWithoutTime.setHours(0, 0, 0, 0);

    const newExpense = {
      date: dateWithoutTime.toISOString().split('T')[0],
      amount: parseFloat(form.amount),
      category: form.category,
      description: form.description
    };

    try {
      const response = await axios.post('http://localhost:5000/api/expenses', newExpense);
      setExpenses([...expenses, response.data]);
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  const handleEdit = (expense) => {
    setEditingExpense(expense);
    setForm({
      amount: expense.amount,
      category: expense.category,
      description: expense.description
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedExpense = {
      amount: parseFloat(form.amount),
      category: form.category,
      description: form.description
    };

    try {
      const response = await axios.put(`http://localhost:5000/api/expenses/${editingExpense._id}`, updatedExpense);
      setExpenses(expenses.map(exp => (exp._id === editingExpense._id ? response.data : exp)));
      setEditingExpense(null);
      setForm({ amount: '', category: '', description: '' });
    } catch (error) {
      console.error('Error updating expense:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/expenses/${id}`);
      setExpenses(expenses.filter(exp => exp._id !== id));
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  const filteredExpenses = expenses.filter(expense =>
    new Date(expense.date).toISOString().substr(0, 10) === selectedDate.toISOString().substr(0, 10)
  );

  const totalExpenses = filteredExpenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="expense-page">
      <h2 className='text-xl'>Expenses for <span className='font-bold'> {selectedDate.toLocaleDateString()}</span></h2>
      <form onSubmit={editingExpense ? handleUpdate : handleSubmit} className="expense-form mt-4 flex flex-col justify-center items-center">
        <div className="form-group max-w-xl">
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            required
            placeholder='Amount'
          />
        </div>
        <div className="form-group max-w-xl">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            placeholder='Category'
          />
        </div>
        <div className="form-group max-w-xl">
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            placeholder='Description'
          />
        </div>
        <button type="submit" className="btn">{editingExpense ? 'Update Expense' : 'Add Expense'}</button>
      </form>
      <h3>Total Expenses: ${totalExpenses.toFixed(2)}</h3>
      <div className="expense-list">
        {filteredExpenses.length > 0 ? (
          filteredExpenses.map(expense => (
            <div key={expense._id} className="expense-item">
              <div>Amount: ${expense.amount.toFixed(2)}</div>
              <div>Category: {expense.category}</div>
              <div>Description: {expense.description}</div>
              <button onClick={() => handleEdit(expense)} className="btn">Edit</button>
              <button onClick={() => handleDelete(expense._id)} className="btn">Delete</button>
            </div>
          ))
        ) : (
          <p>No expenses for this date.</p>
        )}
      </div>
    </div>
  );
};

export default ExpensePage;
