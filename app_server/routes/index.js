var express = require('express');
var router = express.Router();
var htmlTests = require('../controllers/html_tests');

/* HTML test pages */
router.get('/', htmlTests.mainMenu);
router.get('/forms', htmlTests.forms);
router.get('/tables', htmlTests.tables);
router.get('/inline-semantics', htmlTests.inlineSemantics);
router.post('/dummy-submit', htmlTests.dummySubmit);
router.post('/dummy-submit-formaction', htmlTests.dummySubmit);
router.get('/dummy-submit', htmlTests.dummySubmit);

module.exports = router;
