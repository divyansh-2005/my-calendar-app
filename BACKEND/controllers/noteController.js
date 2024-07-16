// controllers/noteController.js
const Note = require('../models/Note');

// Get all notes for the logged-in user
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new note
const createNote = async (req, res) => {
    const { title, content, createdAt } = req.body;
  
    const note = new Note({
      title,
      content,
      createdAt: new Date(createdAt), // Ensure createdAt is a Date object
      user: req.user.id // Associate note with the logged-in user
    });
  
    try {
      const savedNote = await note.save();
      res.status(201).json(savedNote);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

// Update a note
const updateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a note
const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Note deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get notes by date
const getNotesByDate = async (req, res) => {
    const { date } = req.params;
    const start = new Date(date);
    start.setUTCHours(0, 0, 0, 0);
    const end = new Date(date);
    end.setUTCHours(23, 59, 59, 999);
  
    try {
      const notes = await Note.find({
        createdAt: { $gte: start, $lte: end },
        user: req.user.id, // Ensure only the logged-in user's notes are fetched
      });
      res.status(200).json(notes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
  getNotesByDate,
};
