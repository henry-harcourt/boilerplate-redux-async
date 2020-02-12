const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/am/:search', (req, res) => {
  request
    .get(`http://api.aucklandmuseum.com/search/collectionsonline/_search?=${req.oparams.search}`)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body.data.children)
      }
    })
})

module.exports = router