var https = require('https');
var albumId = process.argv[2];
var clientId = process.env.IMGUR_CLIENTID;

if(!albumId){
	throw "You must provide an album id";
}

https.get({
	hostname: 'api.imgur.com',
	path: '/3/album/' + albumId + '/images/',
	headers: {
		Authorization: 'Client-ID ' + clientId
	}
}, 
function(response){
	response.on('data', function(data){
		var images = JSON.parse(data).data;
		images.forEach(function(image){
			console.log(image.link.substr(0, image.link.indexOf('.jpg')) + 'h' + '.jpg');
		})
	})
}).on('error', function(e){
	console.log("Got error: " + e.message);
});
