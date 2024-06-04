const http = require('http');
const fs = require('fs');

let votos = {};

const server = http.createServer((req, res) => {
    if (req.url === '/votos') {
        const votosJson = JSON.stringify({ votos });
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(votosJson);
    } else if (req.url === '/event-stream') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        });

        const votosJson = JSON.stringify({ votos });
        res.write(`data: ${votosJson}\n\n`);
    }
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

// Resto del código para manejar las solicitudes de votos y actualizar votos...
