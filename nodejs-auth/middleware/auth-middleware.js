
const jwt= require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  
  const authHeader = req.headers['authorization'];
  console.log('🔐 authHeader:', authHeader);

  // Get token from header: "Bearer <token>"
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access denied. No token provided, please login to continue'
    })
    }

    //decode the userinformation
    try{
        const decodedTokeninfo= jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.userInfo= decodedTokeninfo

    }catch(e){
        console.error('error found at the auth-middleware', e)
        return res.status(500).json({
        success: false,
        message: 'Access denied. No token provided, please login to continue'
    })
    }



    next()
  }


module.exports=authMiddleware