const express = require('express');
const router = express.Router();

const hardwareController = require('../app/controllers/hardwareController');

router.get('/create', hardwareController.Create);
router.post('/store', hardwareController.Store);
router.post('/handle-form-actions', hardwareController.HandleFormActions);
router.get('/:id/edit', hardwareController.Edit);
router.put('/:id', hardwareController.Update);
router.patch('/:id/restore', hardwareController.Restore);
router.delete('/:id', hardwareController.Delete);
router.delete('/:id/force', hardwareController.ForceDelete);
router.get('/:slug', hardwareController.Show);


module.exports = router;
