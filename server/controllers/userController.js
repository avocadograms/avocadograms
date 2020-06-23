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
//     const query = `SELECT users.*`
//     db.query(query, (err, user) => {
//         if(err){
//             return next(err);    
//         }
//     res.locals.user = user;
//     return next();
//     })
// }

// userController.updateScore = () => {
    // const {wins} = req.params;
    // const {losses} = req.params;
    // const {user_id} = req.params;
    // const query = {
    //     text: `
    //     UPDATE users 
    //     SET (wins = ${wins}, losses = ${losses})   
    //     WHERE user_id = ${user_id} 
    //     `,
    //   }
    //db.query(query, (err, updated) => {
    //  if(err){
    //    return next(err);
    //  }
    //  res.locals.updated = updated;
    //  return next();
    //})
// }

module.exports = userController;