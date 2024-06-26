const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewController');

router.get('/:slug', newsController.Show);
router.get('/', newsController.index);

module.exports = router;
