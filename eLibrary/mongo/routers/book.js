//.js file that implements book routers. Here is provided the logic to
//perform the create, find, edit, list all books and delete operations on books
//stored in the database.

const express = require('express')
const router = new express.Router()
let Book = require('../schemas/book')

//Create book
router.post('/create', (req,res) => {
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

//Find a single book using its ID
router.get('/books/:id', (req,res) => {
    const _id = req.params.id
    Book.findById(_id).then((book) => {
        if(!book){
            return res.status(404).send()
        }
        res.send(book)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

//Update book attributes
router.patch('/books/:id', async (req,res) => {
    try{
        const book = await Book.findByIdAndUpdate(req.params.id, 
            req.body, {new: true, runValidators: true})
        
        if(!book){
            return res.status(404).send()
        }

        res.send(book)
    } catch(e) {
    res.status(500).send(e)
}
})

//Delete a book
router.delete('/books/:id', (req,res) => {
    const _id = req.params.id
    Book.findByIdAndDelete(_id).then((book) => {
        if(!book){
            return res.status(404).send()
        }
        res.send(book)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

//Export the router so it can be used by other files
module.exports = router