const db = require ('../models/models.js');

const userController = {};

userController.createUser = (req, res, next) => {
  // console.log('creating a user');
  const { name, email, password } = req.body;
  const query = {
    text: `
    INSERT INTO users ( name, email, password )
    VALUES ($1, $2, $3)
    `,
    values: [name, email, password]
  }

  db.query(query, (err, newUser) => {
    if (err) {
      // console.log(`something's broken in userController.createUser`);
      return next(err);
    }
    res.locals.newUser = newUser;
    return next();
  })
}

userController.getUser = (req, res, next) => {
    const query = `SELECT * FROM users`
    db.query(query, (err, user) => {
        if(err){
            return next(err);    
        }
    res.locals.user = user;
    return next();
    })
}

userController.updateScore = (req, res, next) => {
    const {wins, losses, user_id} = req.body;
    const query = {
        text: `
        UPDATE users 
        SET wins = ${wins}, losses = ${losses}   
        WHERE user_id = ${user_id} 
        `,
      }
    db.query(query, (err, updated) => {
     if(err){
       return next(err);
     }
     res.locals.updated = updated;
     return next();
    })
}


userController.createOauthUser = (req, res, next) => {
  // console.log('creating a user');
  console.log('res.locals in createOauthUser', res.locals)
  const { login } = res.locals;
  console.log('login is: ', login)
  const query = {
    text: `
    INSERT INTO users ( name )
    VALUES ($1)
    `,
    values: [login]
  }

  db.query(query, (err, newUser) => {
    if (err) {
      // console.log(`something's broken in userController.createUser`);
      return next(err);
    }
    res.locals.newUser = newUser;
    return next();
  })
}
module.exports = userController;




/* Schema for user table

CREATE TABLE USERS (
  user_id 	SERIAL PRIMARY KEY,
  name 	VARCHAR(50) unique,
  email 	VARCHAR(50) unique,
  password 	VARCHAR(50),
  current_session 	VARCHAR(50),
  wins 	INT DEFAULT 0,
  losses 	INT DEFAULT 0
)
*/

