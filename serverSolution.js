const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;

server.on('error', err => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use.`);
    process.exit(1);
  } else {
    console.error(`Server failed to start: ${err.message}`);
    process.exit(1);
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
//Improved error handling to catch and report server errors.