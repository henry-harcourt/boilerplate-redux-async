import {RECEIVE_QUOTE} from '../actions'

function quote (state = '', action) {
  switch (action.type) {
    case RECEIVE_QUOTE:
      return action.quote   
      

    default:
      return state
  }
}

export default quote