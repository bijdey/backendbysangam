const Image = require('../models/Image');
const { uploadToCloudinary } = require('../helpers/cloudinaryHelper');
const fs= require('fs')
const cloudinary= require('../config/cloudinary')

const uploadImageController = async (req, res) => {
  try {
    // Check if the file is missing in the request object
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Unable to trace the file. File is required. Please upload an image.'
      });
    }

    //upload to the cloudinary)
    const { url, publicId} = await uploadToCloudinary(req.file.path);

    //store the image url and publicId along with the uploaded user id  in the data base
    const newlyUploadedImage= new Image({
        url, 
        publicId, 
        uploadedBy: req.userInfo.userId
    })
    await newlyUploadedImage.save()
    

    //delete the file from the local storage( first uploaded and then deleted )
    fs.unlinkSync(req.file.path)

    res.status(201).json({
        success: true,
        message: 'Imaged is uploaded successfuly',
        image: newlyUploadedImage
    })

  } catch (error) {
    console.error('Error at image-controller:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong, please try again.'
    });
  }
};


//fetch the image it also includes pagination

const fetchImageController = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;  // current page number
    const limit = parseInt(req.query.limit) || 5;  // items per page
    const skip = (page - 1) * limit;

    const sortBy = req.query.sortBy || 'createdAt';
    const sortOrder = req.query.sortOrder === 'asc' ? 1 : -1;
    const sortObj = { [sortBy]: sortOrder };

    const totalImages = await Image.countDocuments();
    const totalPages = Math.ceil(totalImages / limit);

    const images = await Image.find().sort(sortObj).skip(skip).limit(limit);

    res.status(200).json({
      success: true,
      currentPage: page,
      totalPages: totalPages,
      totalImages: totalImages,
      data: images
    });

  } catch (error) {
    console.error('Error in fetchImageController:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong while fetching the images. Please try again.'
    });
  }
};


const deleteImageController = async (req, res) => {
  try {
    const getCurrentIDofImageToBeDeleted = req.params.id;
    const userId = req.userInfo.userId;

    // Find the image (even if not owned by current user)
    const image = await Image.findById(getCurrentIDofImageToBeDeleted);
    console.log(image)

    if (!image) {
      return res.status(404).json({
        success: false,
        message: 'Image not found in the database',
      });
    }

    // Check ownership before deletion
    if (image.uploadedBy.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: 'You are not authorized to delete this image as you did not upload it',
      });
    }

    // ✅ Delete from Cloudinary
    await cloudinary.uploader.destroy(image.publicId);

    // ✅ Delete from MongoDB
    await Image.findByIdAndDelete(getCurrentIDofImageToBeDeleted);

    return res.status(200).json({
      success: true,
      message: 'Image deleted successfully',
    });

  } catch (error) {
    console.error('❌ Error in deleteImageController:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to delete the image. Please try again later.',
    });
  }
};





//68779f509e9319f84e68387b

module.exports= { 
    uploadImageController,
    fetchImageController,
    deleteImageController

}