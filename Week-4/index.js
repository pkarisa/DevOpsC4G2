// Import
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

// Handlers
let handlers = {};

handlers.home = function (data, callback) {
    console.log(data);
    // TODO: Respond with the home html page;
    // TODO: Deploy web app -> Heroku
    callback(200, '<p>This is the home page</p>');
};
handlers.about = function (data, callback) {
    callback(200);
};
handlers.notFound = function (data, callback) {
    callback(404);
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

        const data = {
            method, requestUrl, trimmedPath, query, headers, payload,
        };

        chosenHandler(data, function (statusCode, payload) {
            // if (typeof(statusCode) == 'number') {
            //     statusCode = statusCode;
            // } else {
            //     statusCode = 200;
            // }
            statusCode = typeof (statusCode) == 'number' ? statusCode : 200;

            payload = typeof (payload) == 'object' ? payload : {};

            // Convert to string
            const payloadAsAString = JSON.stringify(payload);

            response.writeHead(statusCode);
            response.end(payloadAsAString);
        })
    });
});

// NB: Use port number ranges between 3000-5000
server.listen(3000, () => {
    console.log('The server is running');
});