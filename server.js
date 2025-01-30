// importing build in http module in Node.js for creating an HTTP server  
// helps handle incoming requests and send responses back to clients

var http = require('http');

// the server is runnig in localhost which means in my computer 
// they are in form of variables so we can change them easily 

var host = 'localhost';
var port = 3000;

// server has been created 
// callback function called when server is running to get the request and response to the client
// the response is in html format
// 200 the status code for response which means that the request was successful

const server = http.createServer((requests, responses) => {
  responses.writeHead(200, { 'Content-Type': 'text/html' });
  responses.end('<h1>Hello Node!!!!</h1>\n');
}); 

// the server is listening to the port and host we have given as input
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
