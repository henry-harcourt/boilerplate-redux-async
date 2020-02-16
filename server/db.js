const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function getActivity (db = connection) {
    return db('activities')
    .select()
}

module.exports = {getActivity}