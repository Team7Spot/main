const bodyParser = require('body-parser')
const express = require("express");
const jwt = require("jsonwebtoken");

const users = require('../models/usersModel')
const router = express.Router();

const urlencodedParser = bodyParser.urlencoded({extended: false})


router.post("/login", async (req, res) => {
  console.log('logging in user')
})

router.post("/register", async (req, res, next) => {
  console.log(req.body.email)
  if (!req.body || !req.body.email || !req.body.password || !req.body.name) {
    const err = new Error("Malformed Request");
    err.status = 400;
    next(err);
    return;
  }
  try {
    const userExists = await users.userExists(req.body.email)
    if (userExists) {
      const err = new Error("User already exists!");
      err.status = 409;
      throw err;
    } else {
      console.log("Registering new user")
      await users.addUser(req.body.name, req.body.email)
    }
    /*const token = jwt.sign({
      id: req.body.email
    }, req.app.get("authConfig").authKey, {
      expiresIn: req.app.get("authConfig").expiresIn
    })*/
    res.status(201).send()
    //res.json()
  } catch (err) {
    err.status = err.status || 500;
    next(err);
  }
})

module.exports = router
