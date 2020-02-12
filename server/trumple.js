const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/random', (req, res) => { // what goes at the end of the url call on the front end 
  request
    .get(`https://api.whatdoestrumpthink.com/api/v1/quotes/random`) // eact path given by the api. typed into url should come up with data
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body.message)
      }
    })
})





module.exports = router
