const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require('../middleware/admin-middleware');
const uploadMiddleware = require('../middleware/upload-middleware');
const { uploadImageController, fetchImageController, deleteImageController } = require('../controllers/image-controller');

const router = express.Router();

// Upload the image/
router.post('/upload', authMiddleware, adminMiddleware, uploadMiddleware.single('image'), uploadImageController);

//get image route
router.get('/getimage', authMiddleware, fetchImageController)

//delete image route
router.delete('/:id', authMiddleware, adminMiddleware, deleteImageController )


// To get all the images (optional route, add if needed)
module.exports = router

