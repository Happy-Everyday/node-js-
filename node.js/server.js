var http = require("http");
var url = require("url");

function start(route){
	function onReques(request, response){
		console.log("接收请求");
		var pathname = url.parse(request.url).pathname;
		console.log("pathname = " + pathname);

		route(pathname);
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello world!123");
		response.end();
	}

	http.createServer(onReques).listen(8888);
	console.log("start");
}
exports.start = start;
