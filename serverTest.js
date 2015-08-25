var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var port = process.env.PORT || 12345;
//建立http伺服器

var server = http.createServer(function (req,res){
		var fileName = url.parse(req.url).pathname;

		var filePath = path.join(__dirname,fileName);
		

		fs.exists(filePath,function(exists){
			if(!exists){
				res.writeHead(404,{'Content-Type':'text/plain'});
				res.end('Not Found\n');
				return;				
				
			}
			else{
				fs.readFile(filePath, function(err,content){
					res.writeHead(200, {'Content-Type':'text/plain'});
					res.end(content);
				});
			}
		});

		
});

//監聽 12345 port
server.listen(port);

console.log('Server running at http://127.0.0.7:12345/');

