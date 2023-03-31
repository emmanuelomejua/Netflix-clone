'use strict';

require('dotenv').config()


const express = require('express');
const {json, urlencoded} = express;
const cors = require('cors')

const authRoute = require('./routes/authRoute')
const userRoute = require('./routes/userRoute')


//Database connection
const connectDatabase = require('./config/db')


// express app ==> bind with http pipeline
const app = express()

app.use(json());
app.use(urlencoded({extended: false}));

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-type', 'Authorization']
}))

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)

const port = process.env.PORT

app.listen(port, err => {
   !err ? console.log(`Server connected to ${port}`): console.log(err)
})
