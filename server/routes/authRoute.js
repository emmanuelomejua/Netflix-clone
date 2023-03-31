const {Router} = require('express')
const router = Router()
const { Login, Register } = require('../controllers/auth');

//Register method
router.post('/register',  Register)

//Login method
router.post('/login', Login)

module.exports = router
