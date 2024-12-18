const express = require('express');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname,'../.env')});


const app = express();
const port = process.env.APP_PORT
app.get('/', async (req, res, next)=> {
    return res.status(200).json({ 
        data: `Message from ${process.env.APP_NAME}`
    })
})

app.listen(port, ()=> {
    console.log(`App Running in port ${port}`)
})