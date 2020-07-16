import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import notes from './routes/note.js'

const app = express()
const port = 8080
const db = 'mongodb://localhost/note'

mongoose.connect(db);

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/notes', notes)
// app.use('/collections', )

app.get('/', (request, response) => {
    response.status(200).send()
});

app.listen(port, () => {
    console.log('App listening on port: ' + port);
})

// Port - to connect with front end application
// Database - to store app data & retrieve it
// Routing - 

// Future work: Incorporate lower level handlers to achieve application level features (Eg: timer for sync)

// Resources: 1. Note