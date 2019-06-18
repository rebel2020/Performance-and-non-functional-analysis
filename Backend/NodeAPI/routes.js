const express = require('express');
const router = express.Router();

const data_controller = require('./controllers/dataController');


router.get('/data', data_controller.data_list);
router.post('/data', data_controller.add_data);
router.delete('/data/:dID', data_controller.delete_data);

module.exports = router;
