const express = require('express')
const db = require ('./db')

const router = express.Router()



router.get('/', (req, res) => {
  console.log(req.query) // ----- outputs to terminal (or look under Network in dev tools) the current state - high or low intensity

  // 

  db.getActivity(req.query.intensity)
  .then(activity => {
    let randomAct = Math.floor(Math.random() * activity.length)

    res.json(activity[randomAct])
  })
})

module.exports = router
