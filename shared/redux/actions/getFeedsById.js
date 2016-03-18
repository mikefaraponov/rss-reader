import { 
  GET_FEEDS_REQ, 
  GET_FEEDS_FAIL, 
  GET_FEEDS_OK 
} from '../constants'
import { searchAnImage } from "../utils/stringParsers"
import fetchFeed from '../utils/fetchFeed'

function getFeedsReq() {
  return {
    type: GET_FEEDS_REQ,
    loading: true
  }
}

function getFeedsOk({entries, meta}) {
  return {
    type: GET_FEEDS_OK,
    loading: false,
    feeds: entries,
    icon: meta.image.url || searchAnImage(meta.description) || 'not_found.png'
  }
}

function getFeedsFail(message) {
  return {
    type: GET_FEEDS_FAIL,
    loading: false,
    message
  }
}

export function getFeedsById(channelId) {

  const channel = JSON
    .parse( localStorage.getItem('channels') )
    .find( (channel, i) => i == channelId )
  return dispatch => {
    dispatch(getFeedsReq())
    return fetchFeed(channel.meta.link)
      .then(feed => dispatch(getFeedsOk(feed)))
      .catch(err => dispatch(getFeedsFail(err.message)))
  }
  
}


      
