const express = require("express");
const router = express.Router();
const Notes = require('../models/Notes');

const { body, validationResult } = require('express-validator');
var fetchuser = require('../middleware/fetchuser')

//Route 1: Get all the notes using: GET 'api/note/fetchallnotes'. Login required
router.get('/fetchallnotes', fetchuser, async(req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        res.json(notes);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
});
//Route 2: Add a new notes using: POST 'api/note/addnote'. Login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter the valid title').isLength({ min: 3 }),
    body('description', 'Enter the valid description').isLength({ min: 5 }),

], async(req, res) => {
    //if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { title, description, tag } = req.body;
        const note = new Notes({
            title,
            description,
            tag,
            user: req.user.id
        });
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
});

//Route 3: Update an existing notes using: PUT "api/note/updatenote". Login required
router.put('/updatenote/:id', fetchuser, async(req, res) => {
    try {
        const { title, description, tag } = req.body;

        //Create a new node object
        const newNote = {};
        if (title) {
            newNote.title = title;
        }
        if (description) {
            newNote.description = description;
        }
        if (tag) {
            newNote.tag = tag;
        }

        //Find the node and update
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Note found")
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed")
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json(note);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
});

//Route 4: Delete the notes using: Delete 'api/note/deletenote'. Login required
router.delete('/deletenote/:id', fetchuser, async(req, res) => {
    try {

        //Find the node and delted
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Note found")
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed")
        }

        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({ "Success:": "Note has been deleted", note: note });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
});
module.exports = router;