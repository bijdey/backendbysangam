const express= require('express')
const router= express.Router()
const authmiddleware=require('../middleware/auth-middleware')
router.get('/toadmin', authmiddleware, (req,res)=>{
    res.json({
        message: 'welcome to the admin page'
    })
})

module.exports= router