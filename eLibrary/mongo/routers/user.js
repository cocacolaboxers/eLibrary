//.js file that implements user routers. Here is provided the logic to
//perform the create and find operations on user collection in the database.

const express = require('express')
const router = new express.Router()
const User = require('../schemas/user')

//Log in  -- if the email and password of the user are found in the db, 
//the user can be logged in. 
router.post('/login', async (req,res) => {
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.send(user)
    }catch(e){
        res.status(404).send()
    }
})

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