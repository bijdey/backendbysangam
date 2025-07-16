const Image = require('../models/Image');
const { uploadToCloudinary } = require('../helpers/cloudinaryHelper');
const fs= require('fs')

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


//fetch the image

const fetchImageController= async(req,res)=>{
  try {
    const images= await Image.find({})
    if(images){
      res.status(200).json({
        success: true,
        data: images

      })
    }
    
  } catch (error) {
    console.error('error in fetchImagecontroller', error)
    res.status(500).json({
      success: false,
      message: 'something went wrong in fetching the images please try again'
    })
    
  }

}


module.exports= { 
    uploadImageController,
    fetchImageController

}