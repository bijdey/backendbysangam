const isAdminUser = (req, res, next) => {
  // Check if user info is attached
  if ( req.userInfo.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Access denied! Admin rights required'
    });
  }

  next(); // ✅ Allow access
};

module.exports = isAdminUser;
