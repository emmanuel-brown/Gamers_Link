const router = require('express').Router()
const axios = require('axios')

router.post('/newUser', async (req, res) =>{
    try{
        const account = await axios.post("http://localhost:5001/users/signup", req.body)
            .then(res => res)
            .catch(() => console.log("api call failed"))
        res.send(account)
    } catch{
        res.status(500).send()
    }
})

router.post('/login', async (req, res) =>{
    try{
        const user = await axios.post("http://localhost:5001/users/login", req.body).then(res => res.data)
        console.log(user)
        res.send(user)
    } catch(e) {
        res.status(400).send()
    }
})

module.exports = router