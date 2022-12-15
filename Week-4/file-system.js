// Import
const fs = require('fs');

// Synchronous vs Asynchronous jobs

// Synchronous === Blocking
const fileData = fs.readFileSync('public/demo.html');
console.log('File', fileData.toString());

// Asynchronous === Non-Blocking
// fs.readFile('public/demo.html', function(error, fileDataAsync) {
//     if (error) {
//         console.log('Error', error);
//     } else {
//         console.log('File', fileDataAsync.toString());
//     }
// });

console.log('The file system demo has ended');