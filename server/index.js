require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') })
const server = require('./server')

const port = process.env.PORT || 3000
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})

