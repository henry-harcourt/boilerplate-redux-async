import {SWITCH_INTENSITY} from '../actions/index'

function switchIntensity (state = {}, action) {
    switch (action.type) {
        case SWITCH_INTENSITY:
            return action.activities

        default: 
            return state
    }
}

export default switchIntensity