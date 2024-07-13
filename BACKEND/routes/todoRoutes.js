const express = require('express');
const {
  getTodos,
  getTodosByDate,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todoController');

const router = express.Router();

router.get('/', getTodos);
router.get('/:date', getTodosByDate);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
