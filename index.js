const { connectToMongo } = require('./db/index.js')
const app  = require('./app.js')
require('dotenv').config();

const port = process.env.PORT || 8000
connectToMongo()
  .then(() => {
    app.on('error', () => {
      console.log('ERROR', error)
    })
    app.listen(port, () => {
      console.log(`App listening on port: ${port}`)
    })
  })
  .catch((error) => {
    console.error('Mongo db connection failed', error)
  })
