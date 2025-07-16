
const express= require('express')
const router= express.Router()
const {loginUser, registerUser, changePassword}= require('../controllers/auth-controller')

//get the auth middleware to insure that the user exists for the change of the password
const authMiddleware= require('../middleware/auth-middleware')
//all routes are related to authentication and authorization/

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/changepassword', authMiddleware, changePassword)





module.exports= router