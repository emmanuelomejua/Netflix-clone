const { Router } = require('express')
const { createList, deleteList, getList } = require('../controllers/list')
const router = Router()

const verify = require('../verifyToken')

router.post('/', verify, createList)

router.delete('/:id', verify, deleteList)

router.get('/', verify, getList)

module.exports = router
