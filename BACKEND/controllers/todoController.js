const Todo = require('../models/Todo');

// Get all todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get todos by due date
const getTodosByDate = async (req, res) => {
  const { date } = req.params;
  const start = new Date(date);
  start.setUTCHours(0, 0, 0, 0);
  const end = new Date(date);
  end.setUTCHours(23, 59, 59, 999);
  try {
    const todos = await Todo.find({ dueDate: { $gte: start, $lte: end } });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new todo
const createTodo = async (req, res) => {
  const { title, description, dueDate } = req.body;
  const todo = new Todo({
    title,
    description,
    dueDate,
  });
  try {
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a todo
const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a todo
const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Todo deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTodos,
  getTodosByDate,
  createTodo,
  updateTodo,
  deleteTodo,
};
