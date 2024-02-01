const express = require('express');
const mongoose = require("mongoose");
require('dotenv').config();
const productsRoutes = require ('./routes/productsRoutes')
const userRoutes = require('./routes/usersRoutes')

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use('/api', productsRoutes)
app.use('/api', userRoutes)

app.get('/', (req, res) => {
    res.send('welcome to my API')
})

mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log("Connected to MongoDB"))
.catch((error) => console.log(error))
app.listen(port, () => console.log('server listening on port', port))
