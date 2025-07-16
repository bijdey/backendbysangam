const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require('../middleware/admin-middleware');
const uploadMiddleware = require('../middleware/upload-middleware');
const { uploadImageController, fetchImageController } = require('../controllers/image-controller');

const router = express.Router();

// Upload the image/
router.post('/upload', authMiddleware, adminMiddleware, uploadMiddleware.single('image'), uploadImageController);
router.get('/getimage', authMiddleware, fetchImageController)

// To get all the images (optional route, add if needed)
module.exports = router
