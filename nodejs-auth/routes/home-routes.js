const express= require('express')
//get the middleware
const authmiddleware=require('../middleware/auth-middleware')
const router= express.Router()
router.get('/welcome', authmiddleware, (req,res)=>{

    const {username, userId, role}= req.userInfo
    console.log('userInfo', req.userInfo)
    res.json({
        message: 'welcome to the home page',
        user:{
            _id: userId,
            username,
            role

        }
    })
})

module.exports= router