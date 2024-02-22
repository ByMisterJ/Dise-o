const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const server = http.createServer(async (req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html'; 
    }

    try {
        const fileContent = await fs.readFile(filePath);
        res.writeHead(200);
        res.end(fileContent);
    } catch (error) {
        if (error.code === 'ENOENT') {
            // Archivo no encontrado
            res.writeHead(404);
            res.end('Archivo no encontrado');
        } else {
            // Otro tipo de error
            res.writeHead(500);
            res.end('Error interno del servidor');
        }
    }
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});