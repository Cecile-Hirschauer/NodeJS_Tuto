// Possibility experience with other binaries and frameworks

// How NodeJS differe from Vanilla JS
// 1) Node runs in a server not in a browser (backend not frontend)
// 2) The console is the terminal window
console.log("Hello world");
// 3) Global object instead of window object
// console.log(global);
// 4) Has Common Core that we will explore
// 5) CommonJS modules instead of ES6 modules
// 6) Missing some JS API like fetch

const os = require('os');
const path = require('path');
const { add, substract, multiply, divide} = require('./math')

console.log(add(3,5));
console.log(substract(7, 4));
console.log(multiply(9, 5));
console.log(divide(8, 2));

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));

