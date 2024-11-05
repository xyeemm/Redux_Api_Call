const express = require('express')
require('dotenv').config()
const productRoutes = require('./routes/products.js')
const app = express()


app.use('/api/products', productRoutes)
app.get('/', function (req, res) {
  res.send('Hello World')
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})