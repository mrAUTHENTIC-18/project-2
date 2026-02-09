// Load http module (built into Node.js)
const http = require('http');

// Create server
const server = http.createServer((req, res) => {

  // Set response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send response
  res.end('Mr. Money with the vibe  til the devil say my name
Ibẹ lowa, mo ní, ibẹ ló ńgbé
Ogedengbe, kí ló dé t olọ gbé?
Abena, ṣébí Accra lóń gbé
Ṣ ọmọ 2:30 for the pool party
Full branding, no be fugazi
White Range and black Maserati
We dey fire go, kòní dá fún anybody');
});

// Port number
const PORT = 3000;

// Start server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
