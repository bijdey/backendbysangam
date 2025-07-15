const express= require('express')
const router= express.Router()
//middleware
const authmiddleware= require('../middleware/auth-middleware')
const adminMiddleware= require('../middleware/admin-middleware')
router.get('/toadmin', authmiddleware, adminMiddleware, (req,res)=>{
    res.json({
        message: 'welcome to the admin page'
    })
})

module.exports= router