import {RECEIVE_CHARACTER} from '../actions'

function characters (state = [], action) {
  switch (action.type) {
    case RECEIVE_CHARACTER:
      return action.characters

    default:
      return state
  }
}

export default characters