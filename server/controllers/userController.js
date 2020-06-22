const db = require ('../models/models.js');

const userController = {};

userController.createUser = () => {
  const { username, email, password } = req.body;
  const query = {
    text: `
    INSERT INTO users ( name, email, password )
    VALUES ($1, $2, $3)
    `,
    values: [username, email, password]
  }

  db.query(query, (err, newUser) => {
    if (err) {
      console.log(`something's broken in userController.createUser`);
      return next(err);
    }
    res.locals.newUser = newUser;
    return next();
  })
}

// userController.getUser = () => {

// }

// userController.updateScore = () => {
    
// }

module.exports = userController;