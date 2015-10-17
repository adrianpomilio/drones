var Hapi = require('hapi');
var Path = require('path');


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

server.route({
    method: 'GET',
    path:'/{path*}',
    handler: {
        directory: {
			path: './public',
			listing: false,
			index: true
		}
    }
});



// start hapi
server.start(function () {
	console.log('Server host:', server.info.host);
	console.log('Server address:', server.info.address);
	console.log('Server running at:', server.info.uri);
});
