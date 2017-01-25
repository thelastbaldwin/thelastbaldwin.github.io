var https = require('https');
var albumId = process.argv[2];
var clientId = process.env.IMGUR_CLIENTID;

if(!albumId){
	throw "You must provide an album id";
}

//now you can paste in the whole url
var albumRegex = /\/a\/(\w+)/;
var match = albumId.match(albumRegex);
albumId = (match) ? match[1] : albumId;

https.get({
	hostname: 'api.imgur.com',
	path: '/3/album/' + albumId + '/images/',
	headers: {
		Authorization: 'Client-ID ' + clientId
	}
}, 
	response => {
	var responseData = '';
	response.on('data', chunk => {
		responseData += chunk;
	});

	response.on('end', ()=>{
		var parsedData = JSON.parse(responseData);
		var images = parsedData.data;
		var extension;
		images.forEach(image =>{
			extension = image.link.substr(image.link.lastIndexOf('.'));
			console.log(image.link.substr(0, image.link.lastIndexOf('.')) + 'h' + extension);
		})
	});
}).on('error', e => {
	console.log("Got error: " + e.message);
});
