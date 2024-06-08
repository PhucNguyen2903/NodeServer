const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/bin/hardwares', meController.BinHardwares);
router.get('/cart/hardwares', meController.CartHardwares);

module.exports = router;
