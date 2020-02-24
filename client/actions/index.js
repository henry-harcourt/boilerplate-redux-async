import request from 'superagent'


export const RECEIVE_DATA = 'RECEIVE_DATA'
export const GET_ACTIVITY = 'GET_ACTIVITY'


export const receiveData = (data) => {
    return {
        type: RECEIVE_DATA,
        data: data
    }
}


export function fetchData (intensity) {
    return (dispatch) => {
        return request
        .get('/api/v1/activities?intensity=' + intensity)
        .then(res => {
            dispatch(receiveData(res.body))
        })
    }
}
