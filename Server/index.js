import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import './db.js'
import { AdminRouter } from './routes/auth.js'
import { userRouter } from './routes/user.js'
import { bookRouter } from './routes/book.js'
import { Book } from './models/Book.js'
import { User } from './models/User.js'
import { Admin } from './models/Admin.js'

const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(cookieParser())
dotenv.config()
app.use('/auth', AdminRouter)
app.use('/user', userRouter)
app.use('/book', bookRouter)

app.get('/dashboard', async (req, res) => {
    try {
        const user = await User.countDocuments()
        const admin = await Admin.countDocuments()
        const book = await Book.countDocuments()
        return res.json({ok: true, user, book, admin})
    } catch(err) {
        return res.json(err)
    }
})
 
app.listen(process.env.PORT, () => {
    console.log("Serve is Running");
})