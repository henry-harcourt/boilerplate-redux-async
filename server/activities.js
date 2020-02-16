const express = require('express')
const request = require('superagent')
const db = require ('./db')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {

  db.getActivity()
  .then(activity => {
    res.json(activity)
  })
})

module.exports = router
