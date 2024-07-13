const express = require('express');
const {
  getExpenses,
  getExpensesByDate,
  createExpense,
  updateExpense,
  deleteExpense,
} = require('../controllers/expenseController');

const router = express.Router();

router.get('/', getExpenses);
router.get('/:date', getExpensesByDate);
router.post('/', createExpense);
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);

module.exports = router;
