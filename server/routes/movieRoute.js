const { Router } = require('express');
const router = Router()
const {createMovie} = require('../controllers/movie')

const verify = require('../verifyToken')

router.post('/', verify, createMovie)


module.exports = router
