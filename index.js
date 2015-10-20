var Hapi = require('hapi');
var Path = require('path');

var fc = require('./flight-controls.js');


var server = new Hapi.Server({ connections: {
	routes: {
		cors: true
	}
}
});




server.connection({
    host: 'localhost',
    port: 8000
});

server.route([{
    method: 'GET',
    path:'/{path*}',
    handler: {
        directory: {
			path: './',
			listing: false,
			index: true
		}
    }
},
{
	method: 'GET',
	path:'/scanner',
	handler: function(request, reply){
		var wifiscanner = require('node-wifiscanner/lib/wifiscanner.js');

		wifiscanner.scan(function(err, data){
			if (err) {
				console.log("Error : " + err);
				return;
			}

			reply(data);
		});

	}
}]
);


var io = require('socket.io')(server.listener);
io.on('connection', function(socket){
  socket.on('command', function(msg){
    console.log('command: ' + msg);
	fc.flightControls(msg);
	io.emit('response', msg);
  });
});

// start hapi
server.start(function () {
	console.log('Server host:', server.info.host);
	console.log('Server address:', server.info.address);
	console.log('Server running at:', server.info.uri);
});
