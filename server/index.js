// @ts-nocheck
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/posts', postRoutes)
app.get('/',(req,res)=>{
  res.send('Hello to Memories API')
})

// REMOVE THIS BEFORE GIT PUSH
const CONNECTION_URL =
  'mongodb+srv://newuser:newuser123@cluster0.c4bom.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/test'
  //
const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch(error => console.log(error.message))
