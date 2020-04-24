const router = require('express').Router()
const passport = require('passport')

const passportSetup = require('../config/passport-setup')

router.get('/login', passport.authenticate('google', {
  scope: ['profile']
}))

router.get('/google/redirect',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/')
  }
)

module.exports = router
