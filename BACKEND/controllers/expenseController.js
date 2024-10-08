const Expense = require('../models/Expense');

// Get all expenses for the logged-in user
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get expenses by date for the logged-in user
const getExpensesByDate = async (req, res) => {
  const { date } = req.params;
  const start = new Date(date);
  start.setUTCHours(0, 0, 0, 0);
  const end = new Date(date);
  end.setUTCHours(23, 59, 59, 999);
  try {
    const expenses = await Expense.find({ user: req.user.id, date: { $gte: start, $lte: end } });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new expense for the logged-in user
const createExpense = async (req, res) => {
  const { date, amount, category, description } = req.body;
  const expense = new Expense({
    // user: req.user.id,
    date,
    amount,
    category,
    description,
  });
  try {
    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);
    
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an expense
const updateExpense = async (req, res) => {
  try {
    const updatedExpense = await Expense.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!updatedExpense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.status(200).json(updatedExpense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an expense
const deleteExpense = async (req, res) => {
  try {
    const deletedExpense = await Expense.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!deletedExpense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.status(200).json({ message: 'Expense deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getExpenses,
  getExpensesByDate,
  createExpense,
  updateExpense,
  deleteExpense,
};
