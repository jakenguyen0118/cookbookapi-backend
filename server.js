require('dotenv').config()
const {PORT = 4000, NODE_ENV = 'development'} = process.env
const mongoose = require('./db/connection')
const express = require('express')
const app = express()

// Add the middleware code needed to accept incoming data and add it to req.body

const cors = require('cors')


NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors())


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
	res.json({ hello: 'Hello World!' })
})

const cookbookRouter = require('./controllers/cookbookRoutes')
app.use('/api/cookbooks/', cookbookRouter)

const authorRouter = require('./controllers/authorRoutes')
const corsOptions = require('../../expressreactbuild/backend/configs/cors')
app.use('/api/authors/', authorRouter)

app.listen(PORT, () => console.log(`Port = ${PORT}`))
