//Handling of routing, app startup and port setup

const express = require('express')
require('./mongo/config')

//Routers
const bookRouter = require('./mongo/routers/book')

const app = express()
const port = 3000

app.use(express.json())

//Making routers usable
app.use(bookRouter)

//Starting server
app.listen(port, () => {
    console.log('Server listening on port ' + port)
})