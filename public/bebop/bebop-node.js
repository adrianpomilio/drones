var bebop = require('node-bebop');
var drone = bebop.createClient();

drone.connect(function() {
    drone.takeOff();

    setTimeout(function() {
        drone.land();
    }, 5000);
});
