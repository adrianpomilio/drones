var bebop = require('node-bebop');
var drone = bebop.createClient();

drone.connect(function() {
    drone.takeOff();
    drone.on('battery', function(t){
        console.log(t);
    });
    

    setTimeout(function() {
        drone.land();
    }, 5000);
});
