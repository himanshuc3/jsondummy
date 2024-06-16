import merge from 'lodash.merge'


// difference between stage and NODE_ENV ???
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const stage = process.env.STAGE || 'local'

let envConfig

if (stage === 'production') {
    // only possible with commonjs module system 
    envConfig = require('./prod').default
} else if (stage === 'testing') {
    envConfig = require('./testing').default
} else {
    envConfig = require('./local').default

}

const defaultConfig = {
    stage,
    env: process.env.NODE_ENV,
    port: 3001,
    secrets: {
        jwt: process.env.JWT_SECRET,
        dbUrl: process.env.DATABASE_URL
    },
    logging: false
}

export default merge(defaultConfig, envConfig)