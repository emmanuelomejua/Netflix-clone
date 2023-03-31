const { Router } = require('express');
const router = Router()
const {createMovie, updateMovie, deleteMovie, getMovie, getRandom, getAll} = require('../controllers/movie')

const verify = require('../verifyToken')

router.post('/', verify, createMovie)

router.put('/:id', verify, updateMovie)

router.delete('/:id', verify, deleteMovie)

router.get('/find/:id', verify, getMovie)

router.get('/random', verify, getRandom)

router.get('/', verify, getAll)


module.exports = router
