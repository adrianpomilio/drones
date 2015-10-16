var Cylon = require('cylon');

Cylon.robot({
    connections:{
        bebop: { adaptor: 'bebop' }
    },
    devices: {
        drone: { driver: 'bebop' }
    },
    work: function(b1) {
        b1.drone.takeOff();
        after((5).seconds(), b1.drone.land);
    }
}).start();
