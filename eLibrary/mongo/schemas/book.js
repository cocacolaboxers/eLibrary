//.js file used to create the moongose schema and model that will be used
// by the corresponding router. 
// This one refers to the book entity and its attributes

const mongoose = require('mongoose')

//Define the schema
const bookSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    creationDate:{
        type: Date
    },
    lasModification:{
        type: Date
    },
    summary: {
        type: String
    }
})

//Define the model
const Book = mongoose.model('book', bookSchema)

//Export the model
module.exports = Book