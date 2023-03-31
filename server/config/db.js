'use strict';
require('dotenv').config()

const mongoose = require('mongoose');
const { set, connect } = mongoose
const {log, error} = require('console')


const db_url = process.env.DB_URI;

set('strictQuery', true);

connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> log('DB connection successful!'))
.catch((err) => error(err.message))


