
import { config as dotenvConfig } from 'dotenv'
dotenvConfig()

import config from './config'

import app from './server'



app.listen(config.port, () => {
    console.log(`Chal rha server @: localhost:${config.port}`)
})