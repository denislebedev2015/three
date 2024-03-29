const http = require('http');
const fs = require('fs');
http.createServer(async (request, response) => {
	if (request.url != '/favicon.ico') {
		let text = await fs.promises.readFile('page.html', 'utf8');
		
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(text);
		response.end();
	}
}).listen(3000);

