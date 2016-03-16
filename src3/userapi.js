'use strict'

import utils from './utils'
import express from 'express'
import awrap from 'awrap'

let router = express.Router()

// middleware specific to this router
router.use((req, res, next) => {
  console.log('Calling user api: ', Date.now())
  next()
})

// async handler, wrap with awrap
router.get('/', awrap(async (req, res) => {
  let userCount = await utils.getUserCount()
  res.send(`total user count: ${userCount}`)
}))

// normal handler
router.get('/:userid', (req, res) => {
  res.send(`user ${req.params.userid}`)
})

export default router
