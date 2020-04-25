const Router = require('express').Router()

//Post Requests
Router.post("/all", async (req, res) =>{
    try{
        console.log("ready to use")
        // res.send("ready to use")
    } catch(err){
        console.log(err)
    }
})

module.exports = Router