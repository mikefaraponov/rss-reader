import {
  GET_FEEDS_REQ,
  GET_FEEDS_FAIL,
  GET_FEEDS_OK,
  TOGGLE_STATS
} from '../constants'
const {assign} = Object

function feeds(state = {
  loading: false, 
  arrOfFeeds: []
}, action){
  switch(action.type){
    case GET_FEEDS_REQ: 
      return assign({}, state, {
        loading: true
      });
    case GET_FEEDS_OK: 
      return assign({}, state, {
        loading: false,
        arrOfFeeds: action.feeds.map( feed => {
          feed.isOpen = false;
          return feed
        }),
        icon: action.icon
      });
    case GET_FEEDS_FAIL: 
      return assign({}, state, {
        loading: false,
        message: action.message
      });
    case TOGGLE_STATS: 
      return assign({}, state, {
        arrOfFeeds: state.arrOfFeeds.map(
          (feed, i) => {
            if(i == action.id) 
              feed.isOpen = !feed.isOpen
            else feed.isOpen = false
            return feed
          }
        )
      });  
    default: 
      return state
  }
}

export default feeds;
