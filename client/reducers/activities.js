import { RECEIVE_DATA } from '../actions/index'

function getDataPls (state = [], action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return action.data

        default: 
            return state
    }
}

export default getDataPls