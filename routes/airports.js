const apicache = require('apicache');
const axiosInstance = require('./axiosConfig');
const cache = apicache.middleware;
const express = require('express');
const router = express.Router();

const AIRPORTS_BASE_ENDPOINT = '/airports';
const AIRPORTS_LIST_ENDPOINT = '/list';

router.get(AIRPORTS_LIST_ENDPOINT, cache('1 day'), async (req, res, next) => {
  try {
    const response = await axiosInstance.get(`${AIRPORTS_BASE_ENDPOINT}${AIRPORTS_LIST_ENDPOINT}`);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
