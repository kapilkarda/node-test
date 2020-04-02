const express 		= require('express');
const router 		= express.Router();
const bodyParser 	= require('body-parser');
const Date 			= require('../Controller/date_file');


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.post('/solution',Date.solution);

module.exports = router;