const express = require('express');
const router = express.Router();
const inputController = require('../controllers/inputController');
const listingController = require('../controllers/listingController')

router.post('/create',inputController.create);
// router.get('/listing',listingController.listing);
router.get('/listing',listingController.show);
router.get('/download',listingController.download);
module.exports = router;