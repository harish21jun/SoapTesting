var express = require('express'),
	multer = require('multer'),
	router = express.Router(),
	testController = require('../controllers/test');

var testDetails={
	root:'C:\\Harish\\Learning\\Node Js\\SoapTesting',
	project:'TOCPAISoapProject.xml',
	testsuite:'Spruce-Mediation',
	testcase:'RCM',
	host:'btln002785:10025'
};

router.get('/', function(req, res) {
	res.render('index', {
		page : 'home',
		title: 'TOCP Test',
		testDetails: testDetails,
		errors: []
	});
});


router.post('/project/test',testController.test);
module.exports = router;
