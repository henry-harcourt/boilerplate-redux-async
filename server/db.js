const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)


// ------ this function takes a parameter 'intensity' which is received from the activities route (under server).
// it then pulls the data from the database and returns data with the intensity property, and then whatever value is assigned
// to it and matches the query. ------- 
function getActivity (intensity, db = connection) {
    return db('activities')
    .where({intensity: intensity})
    .select()
}


module.exports = {
    getActivity,
}