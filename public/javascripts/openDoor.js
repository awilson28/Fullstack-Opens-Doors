var controller = Leap.loop(function(frame) {
	if(frame.hands.length > 0) {
		var hand = frame.hands[0];
		var position = hand.palmPosition;
		var velocity = hand.palmVelocity;
		var direction = hand.direction;
	}
})