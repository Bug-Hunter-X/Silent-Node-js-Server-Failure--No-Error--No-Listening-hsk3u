const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon error:  Server not listening on the port, even though no error message is displayed
//Possible causes:
//1. Port already in use by another process 
//2. Incorrect permissions for the port
//3. Firewall blocking the port
//4. OS-level restrictions on port usage 
//5. The server might be crashing silently (e.g., unhandled exception in the request handler)
//6. Incorrect server configuration settings
//7. OS or Network errors preventing listening