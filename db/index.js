const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

module.exports = {
  connectToMongo: async () => {
    try {
      const connectionInstance = await mongoose.connect(`${mongoURI}/${dbName}`)
      console.log(
        `Connected to mongo !! HOST: ${connectionInstance.connection.host}`
      )
    } catch (error) {
      console.error('Error connecting with database', error)
      process.exit(1)
    }
  },
}
