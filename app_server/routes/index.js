var express = require('express');
var router = express.Router();
var ctrlForms = require('../controllers/forms');

/* Locations pages */
router.get('/', ctrlForms.standardInputs);
router.post('/dummy-submit', ctrlForms.dummySubmit);
router.post('/dummy-submit-formaction', ctrlForms.dummySubmit);
router.get('/dummy-submit', ctrlForms.dummySubmit);

module.exports = router;
