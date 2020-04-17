const express = require('express');
const socket = require('socket.io');
const mysql = require('mysql');
const passportSetup = require('./config/passport-setup')

const app = express()
const server = app.listen(3000, () => { //starts server on port 3000
  console.log('listening on port 3000')
})
app.use(express.static('./../frontend'))
const io = socket(server);
io.on('connection', (socket) => {
  console.log('Connection made to server', socket.id)
})

//connect to a database
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'dbname'
})

/*connection.connect((err) => {
  if (err) throw err
  console.log('Connected to db')
})*/
