const express = require('express');
const socket = require('socket.io');

const usersController = require('./controllers/usersController')
const tasksController = require('./controllers/tasksController')
const projectsController = require('./controllers/projectsController')

const PORT = process.env.PORT || 8080
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use("/api/user", usersController)


const con = require('./config/db-setup')

con.userCon.connect((err) => {
  if (err) throw err
  console.log('Connected');
})


//creates a server
const server = app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
