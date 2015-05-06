'use strict'

import fetch from 'node-fetch'

export default {
  magic() {
    return 'es6'
  },

  async fooTask() {
    return 'es7'
  },

  async isFromMainland() {
    try {
      var response = await fetch('http://ipservice.163.com/isFromMainland')
      return await response.text()
    } catch (ex) {
      console.error(ex)
    }
  }
}
