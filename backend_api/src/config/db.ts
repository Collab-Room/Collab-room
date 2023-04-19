import mongoose from 'mongoose'
import logger from '../common/logger'

// const MONGO_URI = process.env.MONGO_URI;
const MONGO_URI = "mongodb+srv://ibsaabraham663:5ZOFX2C8VgdE5JKy@cluster0.klyek0i.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(MONGO_URI)

mongoose.Promise = global.Promise

// Get current connected Database
const db = mongoose.connection
// Notify on error or success

db.on('error', (err) => logger.error('connection with db error', err))
db.on('close', () => logger.info('connection closed to db'))
db.once('open', () =>
  logger.info(`Connected to the database instance on ${MONGO_URI}`)
)

export default {
  Connection: db
}