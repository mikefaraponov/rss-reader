import {
  ADD_RSS_REQ,
  ADD_RSS_OK,
  ADD_RSS_FAIL,
  REMOVE_RSS,
  CLEAR_ALL_RSS,
  CLEAR_RSS_ERROR
} from '../constants'

const {assign} = Object

function channels(state = { 
    loading: false, 
    arrOfChannels: JSON.parse(localStorage.channels || '[]')
}, action) {
  switch(action.type){
    case ADD_RSS_REQ: 
      return assign({}, state, {
        message: '',
        loading: true
      });
    case ADD_RSS_OK: 
      return assign({}, state, {
        loading: false,
        arrOfChannels: state.arrOfChannels
                            .concat(action.feed)
      });
    case ADD_RSS_FAIL: 
      return assign({}, state, {
        loading: false,
        message: action.message
      });
    case REMOVE_RSS:
      return assign({}, state, {
        arrOfChannels: state
          .arrOfChannels
          .filter((channel, i) =>
            i !== action.id
          )
      });
    case CLEAR_ALL_RSS: 
      return assign({}, state, {
        arrOfChannels: []
      });  
    case CLEAR_RSS_ERROR: 
      return assign({}, state, {
        message: ''
      });  
    default: 
      return state
  }
}

export default channels;
