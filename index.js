const setupDb = require('./db/db.setup')
const express = require('express')
const User = require('./db/models/user')
const app = express()

setupDb()

const port = 3000

app.use(express.json())

// in prod i'd put this in separate files
// example
app.get('/user/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await User.query().findById(id).withGraphFetched('channel')
    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}`))
