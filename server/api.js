"use strict"

const models = require('./db')
const express = require('express')
const router = express.Router();

router.post('/api/login/createAccount', (req, res) => {
  let newAccount = new models.Login({
    username: req.body.username,
    password: req.body.password
  })

  newAccount.save((err, data) => {
    if (err) {
      res.send(err);
    }else {
      res.send('createAccount successed')
    }
  })
})

router.post('/api/login/getAccount', (req, res) => {
  let account = {
    username: req.body.username,
    password: req.body.password
  }
  console.log(account);
  models.Login.find(account, (err, data) => {
    if (err) {
      res.send('err');
    } else {
      res.send(data)
    }
  })
})

router.post('/api/login/changeAccount', (req, res) => {
  let account = {
    username: req.body.username
  }
  let newAccount = {
    password: req.body.password
  }
  models.Login.update(account, newAccount, (err, data) => {
    if (err) {
      res.send('err');
    } else {
      res.send(data)
    }
  })
})

module.exports = router;
