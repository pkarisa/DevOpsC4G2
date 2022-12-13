// Import
const http = require('http');

// Create Server
const server = http.createServer(function(req, res) {
    const method = req.method;
    const path = req.url;
    const headers = req.headers;

    const data = {
        method, path, headers,
    };

    console.log(data)

    res.end();
});

server.listen(3000, function () {
    console.log('My server is running');
});