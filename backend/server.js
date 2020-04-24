const express = require('express');
const socket = require('socket.io');
const mysql = require('mysql');
const path = require('path')
const passport = require('passport')

const con = require('./config/db-setup')
const authRouter = require('./routes/auth-routes')
const keys = require('./config/keys')

const PORT = process.env.PORT || 5000
const app = express()

app.use(authRouter)
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
  //this was to make sure I could send files
  res.sendFile(path.join(__dirname, '../frontend/teamspot/public/index.html'))
})

con.connect((err) => {
  if (err) throw err
  console.log('connected to db')
})

//creates a server
const server = app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
