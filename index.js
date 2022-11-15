const setupDb = require('./db/db.setup')
const express = require('express')
const app = express()
const userRouter = require('./routes/user-router')

setupDb()

const port = 3000

app.use(express.json())

// example
app.use('/user', userRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}`))
