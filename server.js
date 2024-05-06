const http = require('http');

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Hello Node.js Server!');
}

const server = http.createServer(requestHandler);

server.listen(3000, (err) => {
  if (err) {
    console.log('Something bad happened', err);
  }
  console.log('Server is listening on 3000');
});