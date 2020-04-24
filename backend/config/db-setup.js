const keys = require('./keys')
const mysql = require('mysql');

var con = mysql.createConnection({
  host: keys.dbInfo.host,
  user: keys.dbInfo.user,
  password: keys.dbInfo.password,
})

module.exports = con
