const con = require('../config/db-setup').userCon
const bcrypt = require("bcrypt");

module.exports = {
  //add a user to our database
  userExists: (email) => {
    console.log("here2")
    let query = "SELECT userName FROM users WHERE email = ?;"
    return new Promise((resolve, reject) => {
      con.query(query, [email], function(err, rows, fields) {
        if (err) {
          reject(err)
        } else {
          resolve(rows.length > 0)
        }
      })
    })
  },

  addUser: (name, email) => {
    let query= `INSERT INTO users (username, email) VALUES ("${name}", "${email}")`
    return new Promise(async (resolve, reject) => {
      //const hash = await bcrypt.hash(password, 10)
      con.query(query, (err, rows, fields) => {
        if (err) {
          reject(err)
        } else {
          console.log("user added")
          resolve()
        }
      })
    })
  },

  deleteUser: () => {

  },

  updateRole: () => {

  }
}
