const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// router.get('/', (req, res) => {
//     res.status.json(res.locals.)
// })

router.post('/createUser', (req, res) => {
    res.status(200).json(res.locals.newUser)
})




module.exports = router;