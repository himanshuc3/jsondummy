const express = require('express')
import morgan from 'morgan'
import cors from 'cors'
import router from './routers/api'
import authRouter from './routers/auth'
import { authorize } from './auth'


const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    console.log('Kabab mai haddi')
    next()
})

app.get('/', (req, res) => {
    res.json({ message: 'hello' })
})

app.use('/api', authorize, router)
app.use('/auth', authRouter)

// Error handler
app.use((err, req, res, next) => {
    res.json({ message: `Shove this error: ${err.message} up your butt.` })
})


export default app