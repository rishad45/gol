const express = require('express');
const router = express.Router()

const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({storage})
// Controllers
const contoller = require('../Controllers/indexController')

router.post('/createBanner',upload.single('image'), contoller.createBanner);

module.exports = router