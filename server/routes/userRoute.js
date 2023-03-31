const {Router} = require('express')
const router = Router()


const { updateUser, deleteUser, getUser, getAllUsers, getStats } = require('../controllers/user');


const verify = require('../verifyToken');

//UPDATE
router.put('/:id', verify, updateUser)

//DELETE
router.delete('/:id', verify, deleteUser)

//GET
router.get('/find/:id', getUser)

//GET ALL USERS
router.get('/stats', verify, getAllUsers)

//GET USER STATS
router.get('/stats', verify, getStats)

module.exports = router
