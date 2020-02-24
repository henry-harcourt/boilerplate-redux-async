// import request from 'superagent'

// const getActivityApi = '/api/v1/activities'


// // ----- string query parameters are passed to the GET route of api which tells the function 
// // to return 'high' or 'low' intensity value activities. Intensity is passed as a parameter because 
// // it is a changing state ---- 
// export function getActivitiesFromApi(intensity) {
//     return request
//     .get(getActivityApi + "?" + "intensity=" + intensity)
//     .then(res => res.body)
// }