const secret = "secretsecret"
const jwt = require('jsonwebtoken');

const sessionController = {};

sessionController.createSession = (req, res, next) => {
    console.log('in create session');
    const token = jwt.sign(res.locals.login, secret);
    res.cookie('name', res.locals.login);
    res.cookie('ssid', token, { httpOnly: true });
    return next();
}
sessionController.verify = (req, res, next) => {
    console.log('in verify controller');
    const {name} = req.cookies;
    if(!name) return res.status(401).end();
    else{
        jwt.verify(req.cookies.ssid, secret, (err, result) => {
            if(err){
                res.status(404).send("Couldn't verify jwts")
            }
            //res.locals.verifiedjwt = result;
            //res.locals.name = res.locals.verifiedjwt.name;
            return next();
        })
    }
    
}

module.exports = sessionController;