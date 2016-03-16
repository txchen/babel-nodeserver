// entry point, do not use babel syntax here in this file, so that 'node' can launch this.
require('babel-core/register')({
  presets: ['es2015', 'stage-0'],
})
require("babel-polyfill")

// ES5 code here
var server = require('./app').default

server.listen(3000, function () {
  console.log('Express server listening http://localhost:3000')
})
