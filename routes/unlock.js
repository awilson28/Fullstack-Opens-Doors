var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	console.log("Circle Gesture");
  res.send(req.body.action);
});

module.exports = router;