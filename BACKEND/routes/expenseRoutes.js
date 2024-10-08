const express = require('express');
const {
  getExpenses,
  getExpensesByDate,
  createExpense,
  updateExpense,
  deleteExpense,
} = require('../controllers/expenseController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', auth, getExpenses);
router.get('/:date', auth, getExpensesByDate);
router.post('/',  createExpense);
router.put('/:id', auth, updateExpense);
router.delete('/:id', auth, deleteExpense);

module.exports = router;
