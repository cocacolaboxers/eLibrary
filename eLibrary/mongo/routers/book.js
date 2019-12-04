//.js file that implements book routers. Here is provided the logic to
//perform the create, find, edit, list all books and delete operations on books
//stored in the database.

const express = require('express')
const router = new express.Router()
const Book = require('../schemas/book')

//Create book
router.post('/books', (req,res) => {
    const book = new Book(req.body)

    book.save().then(() => {
        res.send(book)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

//Retrieve all books
router.get('/books', (req,res) => {
    Book.find({}).then((books) => {
        res.send(books)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

//Export the router so it can be used by other files
module.exports = router