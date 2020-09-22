const JwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose')
const Admin = mongoose.model('Administrator')
const config = require('../config/keys.config')

const options = {
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt
}

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try {
                const admin = await Admin.findById(payload.adminId).select('email id')

                if (admin) {
                    done(null, admin)
                } else {
                    done(null, false)
                }
            } catch (e) {
                console.log(e);
            }
        })
    )
}