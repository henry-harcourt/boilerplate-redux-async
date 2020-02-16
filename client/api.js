import request from 'superagent'

const getActivityApi = '/api/v1/activities'

export function getActivitiesFromApi() {
    return request
    .get(getActivityApi)
    .then(res => res.body)
}