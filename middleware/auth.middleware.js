//jwt
const jwt = require('jsonwebtoken')
//config configuration
const config = require('config')


module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS'){
        return next()
    }

    try {
        const token = req.headers.authorization.split(' ') //bearer token

        if (!token){
            res.status(401).json({message: 'Not authenticated!'})
        }

        const decoded = jwt.verify(token, config.get('jwtSecret'))
        //save decoded token to req
        req.user = decoded
        //app continue working
        next()
    } catch (e) {

    }
}