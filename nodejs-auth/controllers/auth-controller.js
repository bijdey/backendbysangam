const User = require('../models/user.js');

const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Check if user already exists
    const checkExistingUser = await User.findOne({
      $or: [{ username }, { email }]
    });

    if (checkExistingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with the same username or email already exists'
      });
    }

    // Create user
    const newUser = await User.create({ username, email, password, role });

    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: newUser
    });

  } catch (error) {
    console.error('Error in registerUser:', error);
    res.status(500).json({
      success: false,
      message: 'Some error occurred. Unable to register, please try again later'
    });
  }
};
