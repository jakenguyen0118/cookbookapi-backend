//import connection
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const cookbookSchema = new Schema(
    {
        title: {type: String, required: true},
        yearPublished: {type: Number, required: true}
    }
)

const Cookbook = mongoose.model('Cookbook', cookbookSchema)
/* Create Cookbook as new schema
    Properties:
    title (string),
    yearPublished (integer),
*/

module.exports = Cookbook
//export model
