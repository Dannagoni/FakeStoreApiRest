const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const productsRoutes = require ('./routes/productsRoutes')
const userRoutes = require('./routes/usersRoutes');
const categoryRouter = require('./routes/categoriesRoutes');
const filtersRouter = require('./routes/filtersRoutes');

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use('/api', productsRoutes)
app.use('/api', userRoutes)
app.use('/api', categoryRouter)
app.use('/api', filtersRouter)

app.get('/', (req, res) => {
    res.send('welcome to my API')
})

mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log("Connected to MongoDB"))
.catch((error) => console.log(error))
app.listen(port, () => console.log('server listening on port', port))
