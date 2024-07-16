// routes/notesRoutes.js
const express = require('express');
const { 
  getNotes, 
  getNotesByDate, 
  createNote, 
  updateNote, 
  deleteNote 
} = require('../controllers/noteController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', auth, getNotes);
router.get('/:date', auth, getNotesByDate); // Add this line
router.post('/', auth, createNote);
router.put('/:id', auth, updateNote);
router.delete('/:id', auth, deleteNote);

module.exports = router;
