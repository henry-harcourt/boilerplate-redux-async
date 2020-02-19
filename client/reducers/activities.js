import {REQUEST_ACTIVITY} from '../actions/index'

function doSomeActivities (state = [], action) {
    switch (action.type) {
        case REQUEST_ACTIVITY:
            return action.activities

        default: 
            return state
    }
}

export default doSomeActivities