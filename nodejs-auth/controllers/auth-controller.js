const User = require('../models/users');
const bcrypt = require('bcrypt');


//register user

const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

      console.log('data comming from postman', req.body)
    // Check if user already exists
    const checkExistingUser = await User.findOne({
      $or: [{ username }, { email }]
    });

    console.log('already exist', checkExistingUser)

    if (checkExistingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with the same username or email already exists. Please try with a different username or email.'
      });
    }

    

    // Hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt); 

    // Create user and save in the database
    const newlyCreatedUser = new User({
      username,
      email,
      password: hashedPassword,
      role: role || 'user'
    });


    //saveinbackend
    await newlyCreatedUser.save(); // Save first
    console.log('newlycreateduser', newlyCreatedUser)

    if (newlyCreatedUser) {
      return res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: newlyCreatedUser
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'Unable to register the user, please try again later'
      });
    }

  } catch (error) {
    console.error('Error in registerUser:', error);
    return res.status(500).json({
      success: false,
      message: 'Some error occurred. Unable to register, please try again later'
    });
  }
};





//login user
const loginUser= async(req,res)=>{
    try {
        
    } catch (error) {
    console.error('Error in LoginUser:', error);
    return res.status(500).json({
      success: false,
      message: 'Some error occurred. Unable to register, please try again later'
    });
  }
};



module.exports = { registerUser, loginUser };

