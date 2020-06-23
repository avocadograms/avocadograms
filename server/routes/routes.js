const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
//const oauthController = require('../controllers/oauthController');

router.get('/getUser', userController.getUser, (req, res) => {
    res.status(200).json(res.locals.user)
})

router.post('/createUser', userController.createUser, (req, res) => {
    res.status(200).json(res.locals.newUser)
})

router.put('/updatedUser', userController.updateScore, (req, res) => {
    res.status(200).json(res.locals.updated)
})



module.exports = router;