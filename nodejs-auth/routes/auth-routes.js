
const express= require('express')
const router= express.Router()
const {loginUser, registerUser}= require('../controllers/auth-controller')
//all routes are related to authentication and authorization

router.post('/register', registerUser)
router.post('./login', loginUser)





module.exports= router