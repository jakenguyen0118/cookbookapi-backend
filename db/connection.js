require('dotenv').config()
const {MONGODBURI} = process.env
const mongoose = require('mongoose')
const config = { useUnifiedTopology: true, useNewUrlParser: true }
mongoose.connect(MONGODBURI, config)

mongoose.Promise = Promise

module.exports = mongoose
