// entry point, do not use babel syntax here, so that node --harmony can launch this.
// nodemon --harmony is a little bit faster than nodemon --exec 'babel-node --harmony'
require("babel/register")

// ES5 code here
var app = require('./app')

var port = 3000
app.listen(port, () => {
  console.log('listening on http://localhost:' + port)
})
