const express = require('express');
const {
  getTodos,
  getTodosByDate,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todoController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', auth, getTodos);
router.get('/:date', auth, getTodosByDate);
router.post('/', auth, createTodo);
router.put('/:id', auth, updateTodo);
router.delete('/:id', auth, deleteTodo);

module.exports = router;
