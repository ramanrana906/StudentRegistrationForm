const express = require('express');

const router = express.Router();
const inputController = require('../controllers/inputController');

console.log('router loaded');


router.get('/', inputController.home);

router.use('/country', require('./country'));
router.use('/student', require('./student'));


module.exports = router;