// A nested object containing configuration data 
const appconfig = {
    name: "mynodeapp",
    version: "2.1.0",
    settings: {
        theme: "dark",
        port: 5000
    }
}

// A function that performs a task 
const displaymessage = (user) => {
    return `welcome, ${user}! you are running version ${appconfig.version}`
};

// Exporting both as a single object 
module.exports = {
    config: appconfig,
    greet: displaymessage
};