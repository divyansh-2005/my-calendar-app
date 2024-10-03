import React, { useState, useEffect } from 'react';
import '../styles/ToDoPage.css';
import axiosInstance from '../utils/axiosInstance';

const ToDoPage = ({ selectedDate, todos, setTodos }) => {
  const [form, setForm] = useState({ title: '', description: '', dueDate: '' });
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const dateStr = selectedDate.toISOString().substr(0, 10);
        const response = await axiosInstance.get(`/todos/${dateStr}`);
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, [selectedDate, setTodos]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dateWithoutTime = new Date(selectedDate);
    dateWithoutTime.setHours(0, 0, 0, 0);

    const newTodo = {
      title: form.title,
      description: form.description,
      dueDate: dateWithoutTime.toISOString().substr(0, 10),
      completed: false,
    };

    try {
      const response = await axiosInstance.post('/todos', newTodo);
      setTodos([...todos, response.data]);
      setForm({ title: '', description: '', dueDate: '' });
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo);
    setForm({ title: todo.title, description: todo.description, dueDate: todo.dueDate });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedTodo = {
      title: form.title,
      description: form.description,
      dueDate: form.dueDate,
      completed: editingTodo.completed,
    };

    try {
      const response = await axiosInstance.put(`/todos/${editingTodo._id}`, updatedTodo);
      setTodos(todos.map(todo => (todo._id === editingTodo._id ? response.data : todo)));
      setEditingTodo(null);
      setForm({ title: '', description: '', dueDate: '' });
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleToggleCompleted = async (todo) => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    try {
      const response = await axiosInstance.put(`/todos/${todo._id}`, updatedTodo);
      setTodos(todos.map(t => (t._id === todo._id ? response.data : t)));
    } catch (error) {
      console.error('Error updating todo completion:', error);
    }
  };

  return (
    <div className="todo-page">
      <h2 className='text-xl'>To-Dos for <span className='font-bold'> {selectedDate.toLocaleDateString()}</span></h2>
      <form onSubmit={editingTodo ? handleUpdate : handleSubmit} className="todo-form mt-4 flex flex-col justify-center items-center">
        <div className="form-group max-w-xl">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            placeholder='Title for Todo'
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
        <div className="form-group max-w-xl">
          <label>Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={form.dueDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn">{editingTodo ? 'Update Todo' : 'Add Todo'}</button>
      </form>
      <div className="todo-list">
        {todos.length > 0 ? (
          todos.map(todo => (
            <div key={todo._id} className="todo-item">
              <div>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleCompleted(todo)}
                />
                <span className={todo.completed ? 'completed' : ''}>{todo.title}</span>
              </div>
              <div>Description: {todo.description}</div>
              <div>Due Date: {new Date(todo.dueDate).toLocaleDateString()}</div>
              <button onClick={() => handleEdit(todo)} className="btn">Edit</button>
              <button onClick={() => handleDelete(todo._id)} className="btn">Delete</button>
            </div>
          ))
        ) : (
          <p>No to-dos for this date.</p>
        )}
      </div>
    </div>
  );
};

export default ToDoPage;
