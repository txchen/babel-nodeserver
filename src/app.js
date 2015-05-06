'use strict'

import koa from 'koa'
import route from 'koa-route'
import utils from './utils'
import book from './bookapi'

let app = koa()
// set experimental to true, so that app.use can take async func
app.experimental = true

// logging middleware, generator
app.use(function *(next) {
  let start = new Date
  yield next
  let ms = new Date - start
  console.log('%s %s - %s', this.method, this.url, ms)
})

// upperCase middleware, async func
app.use(async function (next) {
  await next
  this.body = this.body || 'no body'
  this.body = this.body.toUpperCase()
})

// router cannot take async func, so need to wrap it.
app.use(route.get('/from/:id', function *(id) {
  yield (async () => {
    this.body = id + ' isFromMainland ' + await utils.isFromMainland()
  })()
}))

app.use(route.get('/', function *() {
  yield (async () => {
    this.body = `Hello World: ${utils.magic()} and ${await utils.fooTask()}`
  })()
}))

app.use(route.get('/book/:id', book.get))
app.use(route.get('/book', book.getall))

// app.use can take async func directly
// app.use(async function () {
//   this.body = `Hello World: ${utils.magic()} and ${await utils.fooTask()}`
// })

export default app
