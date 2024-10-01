
import { config as dotenvConfig } from 'dotenv'
import { generateRandomData } from 'datagen-rs-node';

dotenvConfig()

import config from './config'

import app from './server'

// async function generateData() {
//     const randomData = await generateRandomData({
//         "options": {
//             "serializer": {
//                 "type": "json",
//                 "pretty": true
//             }
//         },
//         "type": "object",
//         "properties": {
//             "test": {
//                 "type": "number",
//                 "min": 30,
//                 "max": 55
//             },
//             "productName": {
//                 "type": "string",
//                 "generator": {
//                     "type": "firstName"
//                 }
//             }
//         }
//     }, ({ current, total }) => {
//         console.log(`Generated ${current}/${total} items`);
//     })
//     console.log(randomData)
// }

// generateData()




app.listen(config.port, () => {
    console.log(`Chal rha server @: localhost:${config.port}`)
})