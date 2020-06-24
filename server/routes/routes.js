const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { CLIENT_ID, CLIENT_SECRET } = require('../../secrets-oauth');
const oauthController = require('../controllers/oauthController');


router.get('/getUser', userController.getUser, (req, res) => {
    res.status(200).json(res.locals.user)
})

router.post('/createUser', userController.createUser, (req, res) => {
    res.status(200).json(res.locals.newUser)
})

router.put('/updatedUser', userController.updateScore, (req, res) => {
    res.status(200).json(res.locals.updated)
})

router.get('/oauth-github', oauthController.authorize, oauthController.getUserAPI, userController.createOauthUser, (req, res) => {
    res.redirect('/')
})

router.get('/oauth', (req, res) =>
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user:email`)
);




module.exports = router;