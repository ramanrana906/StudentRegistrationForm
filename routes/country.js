const express = require('express');
const router = express.Router();
const inputController = require('../controllers/inputController');

router.get('/list',inputController.country);


module.exports = router;