const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('FormularioWeb.html', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('404 Not Found');
        return res.end();
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('404 Not Found');
    return res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
