const express = require('express')
const request = require('superagent')
const db = require ('./db')

const router = express.Router()



router.get('/', (req, res) => {
  console.log(req.query) // ----- outputs to terminal (or look under Network in dev tools) the current state - high or low intensity
  db.getActivity(req.query.intensity)
  .then(activity => {
    res.json(activity)
  })
})

module.exports = router
