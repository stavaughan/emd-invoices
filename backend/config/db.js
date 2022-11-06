import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

const MONGODB_URL = process.env.MONGODB_URL

if (!MONGODB_URL) {
  throw new Error('MONGODB_URL is not defined')
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null
  }
}

const connectDB = async () => {

  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {

    const options = {
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }

    const connectDB = await mongoose.connect(MONGODB_URL, options)

    cached.promise = connectDB
  }
  cached.conn = await cached.promise
}

export default connectDB
