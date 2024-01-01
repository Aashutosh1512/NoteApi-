

const Note = require("../models/note");

const { validationResult } = require('express-validator');
//1.create

const create= async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, content } = req.body;
      const note = new Note({ title, content });
      await note.save();
      res.status(201).json(note);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
//2. retrive
const retrieve=async (req, res) => {
    try {
      const notes = await Note.find();
      res.status(200).json(notes);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // 3. Retrieve Single Note
  const retrievesingle=async (req, res) => {
    try {
      const note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).json({ error: 'Note not found' });
      }
      res.status(200).json(note);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // 4. Update Note
  const update=async (req, res) => {
    try {
      const { title, content } = req.body;
      const note = await Note.findByIdAndUpdate(
        req.params.id,
        { title, content, updatedAt: Date.now() },
        { new: true }
      );
      if (!note) {
        return res.status(404).json({ error: 'Note not found' });
      }
      res.status(200).json(note);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }


// 5. Delete Note
const deletenote=async (req, res) => {
    try {
      const note = await Note.findByIdAndDelete(req.params.id);
      if (!note) {
        return res.status(404).json({ error: 'Note not found' });
      }
      console.log("deleted ")
      res.status(204).json({ message: "notes deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }


  exports.create=create;
  exports.deletenote=deletenote;
  exports.update=update;
  exports.retrievesingle=retrievesingle;
  exports.retrieve=retrieve;

