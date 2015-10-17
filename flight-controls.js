module.exports = {
    flightControls : function(cmd) {
    console.log(cmd);
    console.log('flight control called');
    switch (cmd) {
        case 'test':
            console.log('testing');
            break;
        case 'up':
            drone.up(2);
            break;
        case 'down':
            drone.up(2);
            break;
        case 'forward':
            drone.forward(2);
            break;
        case 'back':
            drone.backward(2);
            break;
        case 'left':
            drone.left(2);
            break;

        case 'right':
            drone.right(2);
            break;
        case 'takeoff':
            drone.connect(function() {
                drone.takeoff(function() {
                    console.log('we have liftoff');
                });
            });
            break;
        case 'land':
            drone.land(function() {
                console.log('we have landed');
            });
            break;
        case 'flip-front':
            drone.frontFlip();
            break;
        case 'flip-back':
            drone.backFlip();
            break;
        case 'flip-left':
            drone.leftFlip();
            break;
        case 'flip-right':
            drone.rightFlip();
            break;
        case 'record-start':
            drone.startRecording();
            break;
        case 'record-stop':
            drone.stopRecording();
            break;
        case 'picture':
            drone.takePicture();
            break;
        case 'clockwise':
            drone.clockwise(2);
            break;
        case 'counter-clockwise':
            drone.counterClockwise(2);
            break;
        case 'stop':
            client.stop();
            break;
        case 'emergency':
            console.log('trying to rescue');
            drone.emergency();
            break;
        default:
            console.log('things went really bad');
            break;
    }
}
};
