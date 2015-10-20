var bebop = require('node-bebop');
var drone = bebop.createClient();



module.exports = {
    flightControls : function(cmd) {

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
            drone.forward(6);
            break;
        case 'back':
            drone.backward(6);
            break;
        case 'left':
            drone.left(5);
            break;

        case 'right':
            drone.right(5);
            break;
        case 'takeoff':
            
            drone.connect(function() {
                drone.takeoff(function() {
                    drone.on('battery', function(t){

                        console.log(t);
                    });

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
            drone.clockwise(60);
            break;
        case 'counter-clockwise':
            drone.counterClockwise(60);
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
