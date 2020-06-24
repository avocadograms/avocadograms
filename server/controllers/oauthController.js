const axios = require('axios');
const { CLIENT_ID, CLIENT_SECRET } = require('../../secrets-oauth.js');
const oauthController = {};

let token = null;

oauthController.authorize = (req, res, next) => {
  console.log('inside authorize')
  const body = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: req.query.code
  };
  const opts = { headers: { accept: 'application/json' } };
  axios.post(`https://github.com/login/oauth/access_token`, body, opts)
    .then(res => res.data['access_token'])
    .then(_token => {
      console.log('My token:', _token);
      token = _token;
      return next();
    })
    .catch(err => res.json({ message: err.message }));

};

oauthController.getUserAPI = (req, res, next) => {
    console.log('inside getuserAPI');
    const tokenHeader = { headers: { 'Authorization': `token ${token}` } };
    axios.get('https://api.github.com/user', tokenHeader)
        .then(res => {
          console.log('res.data is: ', res.data);
            res.data;
            return next();
        })
        .catch(err => res.json({ message: err.message }))

}

module.exports = oauthController;