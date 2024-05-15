import mongoose from 'mongoose'

let connected = false
const connectDB = async () => {
  mongoose.set('strictQuery', true)


  if (connected) {
    console.log('Using existing connection')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI)
    connected = true
    console.log('Database connected')
    
  } catch (error) {
    console.log('Error connecting to database: ', error)
  }
}

export default connectDB