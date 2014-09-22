var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
  // res.send(req.body.action);
  // console.log(req.body.action);
  // res.send({});
});

module.exports = router;
