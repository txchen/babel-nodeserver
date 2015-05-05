import "babel/polyfill"
import app from './app'

let port = 3000
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})
