const http = require('http')
const fs = require('fs')

let server = http.createServer((request, responce) => {
    responce.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    // if (request.url == '/index.html' || request.url == '/')
    //     fs.createReadStream('templates/index.html').pipe(responce)
    // else if (request.url == '/about.html')
    //     fs.createReadStream('templates/about.html').pipe(responce)
    // аналог:
    switch (request.url) {
        case '/index.html': fs.createReadStream('templates/index.html').pipe(responce);
            break;
        case '/': fs.createReadStream('templates/index.html').pipe(responce);
            break;
        case '/about.html': fs.createReadStream('templates/about.html').pipe(responce);
            break;
        default: fs.createReadStream('templates/404.html').pipe(responce);
    }
})

const PORT = 3000
const HOST = 'localhost'

server.listen(PORT, HOST, () => {
    console.log(`Сервер запущен: http://${HOST}:${PORT}`);
})