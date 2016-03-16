import express from 'express'
import logger from 'morgan'
import utils from './utils'
import users from './userapi'
import awrap from 'awrap'

const app = express()
app.use(logger('dev'))

// async handler, wrap with awrap
app.get('/', awrap(async (req, res) => {
  res.send(`Hello World: ${utils.magic()} and ${await utils.fooTask()}`)
}))

// mount userapi on /users
app.use('/users', users)

export default app
