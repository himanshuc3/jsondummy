const express = require('express')

const app = express()

function requestsAaneDo(){
    console.log('chal toh rha hai')
}

app.get('/', (req,res) => {
    res.send('Home pai hai')
})

app.listen(8080, requestsAaneDo)