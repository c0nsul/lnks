const {Router} = require('express')
//encrypting data
const bcrypt = require('bcryptjs')
//validator
const {check, validationResult} = require('express-validator')
//model
const User = require('../models/User')
const router = Router()

//  /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Incorrect email '),
        check('password', 'Password should be atleast 6 symbols').isLength({min:6})
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return ews.status(400).json({
                errors: errors.array(),
                message: 'Incorrect registration data'
            })
        }
        const {email, password} = req.body
        const candidate = await User.findOne({email})
        if (candidate){
            return res.status(400).json({message: 'User already exist'})
        }
        //encrypting data
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User ({email, password: hashedPassword})
        await user.save()
        res.status(201).json({message: 'User Created Successfully'})
    } catch (e){
        res.status(500).json({message: 'Something goes wrong, please try again!'})
    }


    //await promise and save
    await todo.save()
    res.redirect('/')
})

//  /api/auth/register
router.post('/login', async (req, res) => {
    //created new object Todo



    //res.redirect('/')
})

//EXPORT!!! DO NOT  FORGET!!!
module.exports = router