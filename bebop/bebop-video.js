
var bebop = require('node-bebop'),
    fs = require('fs');

var output = fs.createWriteStream("./video.h264"),
    drone = bebop.createClient(),
    video = drone.getVideoStream();

drone.connect(function() {

    video.pipe(output);
    drone.takeOff();

  setTimeout(function() {
    drone.right(10);
  }, 3000);

  setTimeout(function() {
    drone.stop();
  }, 4000);

  setTimeout(function() {
    drone.left(10);
  }, 5000);

  setTimeout(function() {
    drone.stop();
  }, 6000);

  setTimeout(function() {
    drone.land();
  }, 7000);
});
