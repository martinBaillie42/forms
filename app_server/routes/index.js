var express = require('express');
var router = express.Router();
var ctrlForms = require('../controllers/forms');

/* Locations pages */
router.get('/', ctrlForms.standardInputs);

module.exports = router;
