// Import the custom  module
const utils = require('./utlis');

// Accessing the nested object 
console.log("app name:", utils.config.name);
console.log("current theme:", utils.config.settings.theme);

// using the exported function
const message = utils.greet("Navjot");
console.log(message);