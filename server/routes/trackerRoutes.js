const express = require('express');
const router = express.Router();
const { trackGrowth, getGrowthTracks } = require('../controllers/trackerController');

router.post('/', trackGrowth);
router.get('/', getGrowthTracks);

module.exports = router;
