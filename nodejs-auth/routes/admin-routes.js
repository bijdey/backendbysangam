const express= require('express')
const router= express.Router()
router.get('/toadmin', (req,res)=>{
    res.json({
        message: 'welcome to the admin page'
    })
})

module.exports= router