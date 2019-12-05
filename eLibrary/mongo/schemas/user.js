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

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if(!user){
        throw new Error('Unable to login');
    }

    const passwordsMatch = (password === user.password)
    if(!passwordsMatch){
         throw new Error('Unable to login');
    }
    
    return user
}

//Define the model
const User = mongoose.model('User', userSchema)

//Export the model
module.exports = User