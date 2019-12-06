//Handling of routing, app startup and port setup

const express = require('express')
const cors = require('cors');
require('./mongo/config')

//Routers
const bookRouter = require('./mongo/routers/book')
const userRouter = require('./mongo/routers/user')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

//Making routers usable
app.use(bookRouter)
app.use(userRouter)

//Starting server
app.listen(port, () => {
    console.log('Server listening on port ' + port)
})