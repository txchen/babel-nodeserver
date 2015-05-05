'use strict'

import koa from 'koa'
import utils from './utils'

let app = koa()
app.experimental = true

// logging middleware, generator
app.use(function *(next) {
  let start = new Date
  yield next
  let ms = new Date - start
  console.log('%s %s - %s', this.method, this.url, ms)
})

// upperCase middleware, async
app.use(async function (next) {
  await next
  this.body = this.body.toUpperCase()
})

// handler, async/await
app.use(async function () {
  this.body = `Hello World: ${utils.magic()} and ${await utils.fooTask()}`
})

export default app
