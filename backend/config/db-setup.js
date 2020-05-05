const keys = require('./keys')
const mysql = require('mysql');

module.exports = {
  userCon: mysql.createConnection({
    host: keys.dbInfo.host,
    user: keys.dbInfo.user,
    password: keys.dbInfo.password,
    database: 'usersAndRoles'
  }),
  projectsCon: mysql.createConnection({
    host: keys.dbInfo.host,
    user: keys.dbInfo.user,
    password: keys.dbInfo.password,
    database: 'projects'
  }),
  tasksCon: mysql.createConnection({
    host: keys.dbInfo.host,
    user: keys.dbInfo.user,
    password: keys.dbInfo.password,
    database: 'tasksAndActivities'
  })
}
