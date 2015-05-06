'use strict'

import utils from './utils'

export default {
  *get (id) {
    this.body = 'book ' + id
  },

  *getall () {
    yield (async () => {
      if (await utils.isFromMainland()) {
        this.body = 'mainland books: a b c'
      } else {
        this.body = 'jp book: x y z'
      }
    })()
  }
}
