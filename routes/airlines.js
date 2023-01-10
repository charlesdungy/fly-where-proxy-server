const apicache = require('apicache');
const axiosInstance = require('./axiosConfig');
const cache = apicache.middleware;
const express = require('express');
const router = express.Router();

const AIRLINES_BASE_ENDPOINT = '/airlines';
const AIRLINES_LOGO_ENDPOINT = '/get-logos';
const AIRLINES_LIST_ENDPOINT = '/list';

router.get(AIRLINES_LIST_ENDPOINT, cache('1 day'), async (req, res, next) => {
  try {
    const response = await axiosInstance.get(`${AIRLINES_BASE_ENDPOINT}${AIRLINES_LIST_ENDPOINT}`);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get(AIRLINES_LOGO_ENDPOINT, cache('1 day'), async (req, res, next) => {
  try {
    const response = await axiosInstance.get(`${AIRLINES_BASE_ENDPOINT}${AIRLINES_LOGO_ENDPOINT}`);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
