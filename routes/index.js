const express = require('express');
const router = express.Router();
const airlinesRouter = require('./airlines');
const airportRouter = require('./airports');

router.use('/airlines', airlinesRouter);
router.use('/airports', airportRouter);

module.exports = router;
