const express = require('express');
const { enquiryInsert, enquiryList } = require('../../controller/web/enquiryController');
const enquiryRoutes = express.Router();

enquiryRoutes.post('/insert', enquiryInsert)
enquiryRoutes.get('/view', enquiryList)

module.exports = enquiryRoutes;