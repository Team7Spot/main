const passport = require('passport')
const googleStrategy = require('passport-google-oauth20')

const keys = require('./keys')
const con = require('../config/db-setup')

passport.use( new googleStrategy({
  callbackURL: keys.google.callbackURL,
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret,
  passReqToCallback: true
},
  (accessToken, refreshToken, profile, done) => {
    //handle new and returning users here
    console.log('this is the callback function for google authentication')
    let sqlQuery = ''
    con.query(sqlQuery, (err, user) => {
      if(err) {
        return done(err)
      }
    })
  })
)
