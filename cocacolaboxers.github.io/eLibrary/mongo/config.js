//Mongoose config file

//Require mongoose
const mongoose = require('mongoose')

//Set connection string (to Atlas Cluster)
const connectionString = 'mongodb+srv://admin:admin123@elibrarycluster-6vwfi.mongodb.net/test?retryWrites=true&w=majority'

//Start connection
mongoose.connect(connectionString, { useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

//console.log('Database connection established')