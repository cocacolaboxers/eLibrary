//.js file used to create the moongose schema and model that will be used
// by the corresponding router. 
// This one refers to the user entity and its attributes

const mongoose = require('mongoose')

//Define the schema
const userSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    adminAcces: {
        type: Boolean,
        default: false
    }
})

//Define the model
const User = mongoose.model('User', userSchema)

//Export the model
module.exports = User