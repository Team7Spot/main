//add this file to .gitignore
module.exports = {
  //info needed for google authentication
  google: {
    callbackURL: '/google/redirect',
    clientID: '376925100681-1pv6v6ntumn25vabdsebmb56obr273s7.apps.googleusercontent.com',
    clientSecret: 'mIbL5aD-EqQTZN0l7AT-chKj'
  },
  //info needed to connect to the database
  dbInfo: {
    host: 'localhost',
    user: 'root',
    password: 'root',
  }
}
