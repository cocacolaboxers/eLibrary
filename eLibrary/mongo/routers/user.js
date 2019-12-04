//.js file that implements user routers. Here is provided the logic to
//perform the create and find operations on user collection in the database.

const express = require('express')
const router = new express.Router()
const User = require('../schemas/user')

//Register (create) a user
router.post('/users/register', (req,res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

//Export the router so it can be used by other files
module.exports = router