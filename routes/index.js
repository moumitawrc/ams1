var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, response, next) {
  response.render('admin/login', {layout: 'layouts/admin-layout'});
});

module.exports = router;
