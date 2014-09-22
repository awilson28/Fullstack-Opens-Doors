var tessel = require('tessel');
var servolib = require('servo-pca9685');
var router = require('tiny-router');

var servo = servolib.use(tessel.port['A']);
router.listen(3000);
var servo1 = 1;
router.get('/', function(req, res) {
  console.log(req);

    var position = 0.001;

    servo.configure(servo1, 0.09, 0.001, function () {
        console.log('Position (in range 0-1):', position);
        servo.move(servo1, 0.001);
        console.log("first move 001");
        setTimeout(function(){
          servo.move(servo1, .997);
          console.log("first move 997");
        }, 5000);

  });
  res.send({anything: true});
});