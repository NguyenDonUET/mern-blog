import express from 'express'
import { connectDb } from './database/connectDb.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

const PORT = 5000

const startServer = async () => {
  await connectDb(process.env.MONGO_URI)
  console.log('🔥 DB connected')
  app.listen(PORT, () => {
    console.log(`💖 Server is running on port ${PORT}`)
  })
}

startServer()
