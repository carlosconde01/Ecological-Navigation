const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Usuario = require('../models/usuario')

passport.use(new LocalStrategy(
    function (username, password, done) {
        Usuario.findOne({ email: username }, function (err, usuario) {
            if (err) return done(err)
            if (!usuario) return done(null, null, { message: 'Usuario o contraseña no válido' })
            usuario.validPassword(password).then((result) => {
                if (result) {
                    return done(null, usuario)
                } else {
                    return done(null, null, { message: 'Usuario o contraseña no válido' })
                }
            })
        })
    }
))

passport.serializeUser(function (usuario, cb) {
    cb(null, usuario.id)
})

passport.deserializeUser(function (id, cb) {
    Usuario.findById(id, function (err, usuario) {
        if (err) { return cb(err); }
        cb(null, usuario);
    })
})

module.exports = passport