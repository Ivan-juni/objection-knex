const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user-controller')

// move it to the controller
router.get('/:id', UserController.getById)

module.exports = router
