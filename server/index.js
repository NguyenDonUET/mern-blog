import express from 'express'
import { connectDb } from './database/connectDb.js'
import dotenv from 'dotenv'
dotenv.config()
import userRoutes from './routes/user.route.js'
const app = express()

// routes
app.use('/api/user', userRoutes)

const PORT = 5000

const startServer = async () => {
  await connectDb(process.env.MONGO_URI)
  console.log('🔥 DB connected')
  app.listen(PORT, () => {
    console.log(`💖 Server is running on port ${PORT}`)
  })
}

startServer()
