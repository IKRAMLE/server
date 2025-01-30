// import build-in fs and http modules in Node.js
var http = require('http');
var fs = require('fs');

// host and port in variables format to be easily changed 

var host = 'localhost';
var port = 3000;

// create a server 
// checks if the requested URL path is /  
// if yes it will read the file index.html and send it back as a response
// if the html file isn't available you will recieve the error loading the page 
// else the html file will apear in the screen as response

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    fs.readFile('index.html', (error, data) => {
      if (error) {
        response.statusCode = 500;
        response.end('Error loading the page');
      } else {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.end(data);
      }
    });
  }
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
