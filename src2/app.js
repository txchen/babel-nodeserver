'use strict'

import Hapi from 'hapi'
import utils from './utils'
import hapiAsync from 'hapi-async-handler'

let server = new Hapi.Server()

server.connection({
  host: 'localhost',
  port: 8000
})

server.register([hapiAsync], (err) => {
  if (err) {
    console.error(`register hapi plugin failed: ${err}`)
  }
})

server.route({
  method: 'GET',
  path:'/hello',
  handler: function (request, reply) {
    reply(`hello world hapi`)
  }
})

// only use async/await, without generator, then --harmony is not needed.
server.route({
  method: 'GET',
  path: '/',
  handler: {
    async: async function(request, reply) {
      reply(`is from mainland? ${await utils.isFromMainland()}`)
    }
  }
})

export default server
