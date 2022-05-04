var express = require('express');
var router = express.Router();
const passport = require('passport')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', login: req.isAuthenticated() });
});

router.get('/login', function (req, res, next) {
  res.render('inicioSesion',);
});

router.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, usuario, info) {
    if (err) return next(err)
    if (!usuario) return res.render('inicioSesion', { info })
    if (usuario.verificado == false) return res.render('inicioSesion', { information: 'Usuario no ha sido verificado.' })
    req.logIn(usuario, function (err) {
      if (err) return next(err)
      return res.redirect('/')
    })
  })(req, res, next)
});

router.get('/salir', function (req, res, next) {
  req.logOut()
  res.redirect('/');
});


module.exports = router;
