const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { CLIENT_ID} = require('../../secrets-oauth');
const oauthController = require('../controllers/oauthController');
const wordController = require('../controllers/wordsController');
const sessionController = require('../controllers/sessionController');

router.get('/getUser', userController.getUser, (req, res) => {
	res.status(200).json(res.locals.user);
}); 

router.post('/createUser', userController.createUser, (req, res) => {
	res.status(200).json(res.locals.newUser);
});

router.put('/updatedUser', userController.updateScore, (req, res) => {
	res.status(200).json(res.locals.updated);
});

router.get('/oauth-github', (req,res,next) => {
  console.log('inside /oauth-github ')
  return next();
}, oauthController.authorize, oauthController.getUserAPI, userController.createOauthUser,sessionController.createSession, (req, res) => {
  res.redirect('/')
})

router.get('/oauth',
(req,res,next) => {
  console.log('inside /oauth ')
  return next();
},
(req, res) =>
	res.header("Access-Control-Allow-Origin", "*")
	 	//.mode("no-cors")
		.header("Access-Control-Allow-Headers", "X-Requested-With")
		.redirect(`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user:email`)
);

router.post('/findWord', wordController.findDefinition, (req, res) => {
	res.status(200).json(res.locals.definition);
});

router.get('/verify', sessionController.verify, (req, res) => {
	res.status(200).send();
})

module.exports = router;
