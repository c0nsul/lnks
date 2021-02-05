const {Router} = require('express')
//model
const Link = require('../models/link')
//auth middleware
const auth = require('../middleware/auth.middleware')
//router
const router = Router()

router.post('/generate', async (req, res) => {
    try {

    } catch (e){
        res.status(500).json({message: 'Something goes wrong, please try again!'})
    }
})

router.get ('/', async (req, res) => {
    try {
        const links = await Link.find({owner: null}) //???
        res.json(links)
    } catch (e){
        res.status(500).json({message: 'Something goes wrong, please try again!'})
    }
})

router.get ('/:id', async (req, res) => {
    try {
        const link = await Link.findById(req.params.id)
        res.json(link)
    } catch (e){
        res.status(500).json({message: 'Something goes wrong, please try again!'})
    }
})

//EXPORT!!! DO NOT  FORGET!!!
module.exports = router