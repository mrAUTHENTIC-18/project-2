// Load http module (built into Node.js)
const http = require('http');

// Create server
const server = http.createServer((req, res) => {

  // Set response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send response
  res.end('TESTED AND TRUSTED');
});

// Port number
const PORT = 3000;

// Start server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
