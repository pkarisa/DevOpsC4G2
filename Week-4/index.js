// Import
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const fs = require('fs');

// Handlers
let handlers = {};

const port = process.env.PORT || 3000;

handlers.home = function (data, callback) {
    const fileData = fs.readFileSync('Week-4/public/home.html');
    // TODO: Deploy web app -> Heroku
    callback(200, fileData.toString());
};
handlers.about = function (data, callback) {
    callback(200);
};
handlers.notFound = function (data, callback) {
    const fileData = fs.readFileSync('Week-4/public/not-found.html');
    callback(404, fileData.toString());
};

// Router
const router = {
    home: handlers.home,
    about: handlers.about,
};

// Create Server
const server = http.createServer(function (request, response) {
    const method = request.method;
    const requestUrl = request.url;
    const headers = request.headers;

    // URL Parsing
    const parsedUrl = url.parse(requestUrl, true);

    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const query = parsedUrl.query;

    // Retrieve the request body
    const decoder = new StringDecoder('utf-8');
    let payload = '';
    request.on('data', function (chunk) {
        payload += decoder.write(chunk);
    });

    request.on('end', function () {
        payload += decoder.end();

        let chosenHandler = typeof (router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound;

        const data = { method, requestUrl, trimmedPath, query, headers, payload };

        chosenHandler(data, function (statusCode, payloadData) {
            // if (typeof(statusCode) == 'number') {
            //     statusCode = statusCode;
            // } else {
            //     statusCode = 200;
            // }
            statusCode = typeof (statusCode) == 'number' ? statusCode : 200;

            // Convert to string
            const payloadAsAString = JSON.stringify(payloadData);

            response.setHeader('Content-Type', 'text/html');
            response.writeHead(statusCode);
            response.end(payloadData);
        });
    });
});

// NB: Use port number ranges between 3000-5000
server.listen(port, () => {
    console.log('The server is running');
});