const Router = require('express').Router()
const Post = require('../models/post.model')

//Post Requests
Router.post("/Newpost", async (req, res) =>{
    try{
        console.log(req.body)
        Post.insertMany([req.body], (err, doc) =>{
            if(err){
                console.log("was not able to add new student")
            } else{
                console.log(doc)
            }
        })  
    } catch(err){
        console.log(err)
        res.send(err)
    }
})

module.exports = Router