const router = require('express').Router()
const axios = require('axios')

const Main_Url = "https://user-serveer.herokuapp.com/"

router.post('/newUser', async (req, res) =>{
    try{
        const account = await axios.post(`${Main_Url}/users/signup`, req.body)
            .then(res => res)
            .catch(() => console.log("api call failed"))
        res.send(account)
    } catch{
        res.status(500).send()
    }
})

router.post('/login', async (req, res) =>{
    try{
        const user = await axios.post(`${Main_Url}/users/login`, req.body).then(res => res.data)
        console.log(user)
        res.send(user)
    } catch(e) {
        res.status(400).send()
    }
})

module.exports = router