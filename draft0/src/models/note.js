import mongoose from 'mongoose'

let Schema = mongoose.Schema;

let noteSchema = new Schema({
    title: String,
    board: Array,
    creationDate: Date,
    modificationDate: Date,
    type: String,
    content: String,
    text: String,
    colour: String,
    tags: Array
})

export default mongoose.model('Note', noteSchema)

// Future work : 1. Add validation
// 2. Add properties to collection (i.e., more complex database) 

// var collection {
//    name: String
//    colour: String
//}

