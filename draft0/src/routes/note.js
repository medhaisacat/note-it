import express from 'express'
import Note from '../models/note.js'

const router = express.Router()

// REST - CRUD operations - HTTP methods
// user -> front-end -> back-end -> database

// /route - function

// Create note 
router.post('/', (request, response) => {
    let note = new Note()
    note.title = request.body.title
    note.board = request.body.board
    note.creationDate = request.body.creationDate
    note.modificationDate = request.body.modificationDate 
    note.type = request.body.type
    note.content = request.body.content
    note.text = request.body.text
    note.colour = request.body.colour
    note.tags = request.body.tags

    note.save()
    .then(note => {
        response.send(note)
    })
    .catch(error => {
        response.send("Error saving note!" + error)
    })
})

// Read note
router.get('/', (request, response) => {
    console.log('Getting all notes');
    Note.find({})
        .exec()
        .then(notes => {
            response.send(notes)
        })
        .catch(error => {
            response.send('Error getting notes! Error: ' + error)
        })
})

// /note/:543652
router.get('/:id', (request, response) => {
    console.log('Getting note', request.params.id)
    Note.findOne({
        _id: request.params.id
        })
        .exec()
        .then(note => {
            response.json(note)
        })
        .catch(error => {
            response.send('Error getting note' + request.params.id + 'Error: ' + error)
        })
})

// Update note
router.put('/:id', (request, response) => {
    Note.findOneAndUpdate({
        _id: request.params.id
    },{
        $set: {
            title: request.body.title,
            author: request.body.author,
            category: request.body.category
        }
    },{
        upsert: true
    })
    .then(note => {
        response.send(note)
    })
    .catch(error => {
        response.send('Error updating book ' + request.params.id, 'Error: ' + error)
    })
})

// Delete note
router.delete('/:id', (request, response) => {
    Note.findByIdAndRemove({
        _id: request.params.id
    })
    .then(note => {
        response.send(note)
    })
    .catch(error => {
        response.send('Error deleting note ' + request.params.id + 'Error: ' + error)
    })
})

export default router