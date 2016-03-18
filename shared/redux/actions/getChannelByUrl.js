import { 
  ADD_RSS_REQ,
  ADD_RSS_OK,
  ADD_RSS_FAIL 
} from '../constants'
import fetchFeed from '../utils/fetchFeed'

const { stringify, parse } = JSON;

function getChannelReq() {
  return {
    type: ADD_RSS_REQ,
    loading: true
  }
}

function getChannelFail(message) {
  return {
    type: ADD_RSS_FAIL,
    loading: false,
    message
  }
}

function getChannelOk({meta, entries}, channelUrl) {
  
  const channels = parse(localStorage.channels || '[]'),
    [ entry ] = entries,
    channel = {
      meta: {
        title: meta.title,
        link: channelUrl,
      },
      entries: [].concat({
          pubDate: entry && entry.pubDate
      })
    }

  localStorage.channels = stringify( 
    channels.concat(channel) 
  )

  return {
    type: ADD_RSS_OK,
    loading: false,
    feed: channel
  }
}

export function getChannelByUrl(channelUrl) {
  return dispatch => {
    dispatch(getChannelReq())
    return fetchFeed(channelUrl)
      .then(feed => dispatch(getChannelOk(feed, channelUrl)))
      .catch(err => dispatch(getChannelFail(err.message)))
  }
}


      
