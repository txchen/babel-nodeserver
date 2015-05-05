'use strict'

import koa from 'koa'
import koaRouter from 'koa-router'
import utils from './utils'

let app = koa()
let router = koaRouter()
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
router.get('/from', function* () {
  yield (async () => {
    this.body = 'isFromMainland ' + await utils.isFromMainland()
  })()
});

router.get('/', function *() {
  yield (async () => {
    this.body = `Hello World: ${utils.magic()} and ${await utils.fooTask()}`
  })()
})

// app.use can take async func directly
// app.use(async function () {
//   this.body = `Hello World: ${utils.magic()} and ${await utils.fooTask()}`
// })

app.use(router.routes())
   .use(router.allowedMethods())

export default app
