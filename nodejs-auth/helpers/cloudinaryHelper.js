const cloudinary = require('../config/cloudinary');

const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath);
    return {
      url: result.secure_url,       
      publicId: result.public_id
    };
  } catch (error) {
    console.error('❌ Error at cloudinaryHelper, failed to upload to Cloudinary:', error);
    throw new Error('Error in Cloudinary helper: Failed to upload');
  }
};

module.exports = {
  uploadToCloudinary
};
