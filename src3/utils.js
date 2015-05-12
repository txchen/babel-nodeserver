'use strict'

function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms))
}

export default {
  magic() {
    return 'es6'
  },

  async fooTask() {
    return 'es7'
  },

  async getUserCount() {
    await sleep(500)
    return Math.floor(Math.random() * 10 + 1)
  }
}
