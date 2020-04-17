const passport = require('passport')
const googleStrategy = require('passport-google-oauth20')

passport.use(
  new googleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: '376925100681-1pv6v6ntumn25vabdsebmb56obr273s7.apps.googleusercontent.com',
    clientSecret: 'mIbL5aD-EqQTZN0l7AT-chKj'
  }, (accessToken, refreshToken, profile, done) => {
    console.log('this is a callback function')
  })
);
