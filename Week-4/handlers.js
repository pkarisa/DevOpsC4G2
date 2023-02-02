const fs = require('fs');

let handlers = {};

handlers.home = function (data, callback) {
    const fileData = fs.readFileSync('public/home.html');
    callback(200, fileData.toString());
};
handlers.about = function (data, callback) {
    callback(200);
};
handlers.notFound = function (data, callback) {
    console.log('Someone is here');
    const fileData = fs.readFileSync('public/not-found.html');
    callback(404, fileData.toString());
};

module.exports = handlers;