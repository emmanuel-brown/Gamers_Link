const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model


const postSchema = Schema({
    created_at: { 
        type: Date, 
        required: true, 
        default: Date.now 
    },
    subject: { type: String, required: true },
    game: String,
    postOwner: { type: String, required: true }, //UserId
    comments: [
        {
            User: { type: String, required: true },
            comment: { type: String, required: true },
            created_at: {
                type: Date, 
                required: true, 
                default: Date.now 
            }
        }
    ],
    like: [ String ], //userId's
    dislikes: [ String ], //userId's
    images: [ String ],
    details: String,
    tags: [ String ],
    catagory: [ String ]
})

const PostModel = model("Post", postSchema)

module.exports = PostModel