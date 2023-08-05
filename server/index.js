'use strict';

require('dotenv').config()


const express = require('express');
const {json, urlencoded} = express;
const cors = require('cors')
const morgan = require('morgan')
const {log, error} = require('console')

const authRoute = require('./routes/authRoute')
const userRoute = require('./routes/userRoute')
const movieRoute = require('./routes/movieRoute')
const listRoute = require('./routes/listRoute')


//Database connection
const connectDatabase = require('./config/db')


// express app ==> bind with http pipeline
const app = express()


//middlewares
app.use(json());
app.use(urlencoded({extended: false}));
app.use(morgan('common'))
app.use(cors())


//routes uses
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/movies', movieRoute)
app.use('/api/list', listRoute)

const port = process.env.PORT

app.listen(port, (err) => {
   !err ? log(`Server connected to ${port}`): error(err)
})
