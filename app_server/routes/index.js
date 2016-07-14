var express = require('express');
var router = express.Router();
var ctrlForms = require('../controllers/forms');

/* Locations pages */
router.get('/', ctrlForms.standardInputs);
router.post('/dummy-submit', ctrlForms.dummySubmit);

module.exports = router;
