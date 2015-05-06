// entry point, do not use babel syntax here in this file, so that 'node' can launch this.
require("babel/register")

// ES5 code here
var server = require('./app')

server.start(function () {
    console.log('Server running at:', server.info.uri)
})
