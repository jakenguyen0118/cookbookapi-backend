//Import connection
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const authorSchema = new Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        cookbooks: [
            {
                ref: 'Cookbook', type: Schema.Types.ObjectId
            }
        ]
    }
)
/* Create Author as new schema
    properties:
    firstName (string),
    lastName (string),
    cookbooks[] (reference to Cookbook model by id)
*/

const Author = mongoose.model('Author', authorSchema)

module.exports = Author

//export model named "Author"
