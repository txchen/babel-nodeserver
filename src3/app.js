import express from 'express'
import logger from 'morgan'
import utils from './utils'
import users from './userapi'
import wga from 'wga'

let app = express()
app.use(logger('dev'))

// async handler, wrap with wga
app.get('/', wga(async (req, res) => {
  res.send(`Hello World: ${utils.magic()} and ${await utils.fooTask()}`)
}))

// mount userapi on /users
app.use('/users', users);

export default app
