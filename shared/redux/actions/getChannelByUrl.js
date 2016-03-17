import {routeActions} from 'react-router-redux'
import fetchFeed from '../utils/fetchFeed'

import { 
  ADD_RSS_REQ,
  ADD_RSS_OK,
  ADD_RSS_FAIL 
} from '../constants'

function getChannelReq() {
  return {
    type: ADD_RSS_REQ,
    loading: true
  }
}

function getChannelOk(feed, channelUrl) {
  const { stringify, parse } = JSON;
  const channels = parse(localStorage.channels || '[]')
  feed.meta.link = channelUrl;
  localStorage.setItem('channels', 
    stringify( channels.concat({
      meta: {
        title: feed.meta.title,
        link: channelUrl,
      },
      entries: [{
          pubDate: feed.entries[0] && feed.entries[0].pubDate
      }]
    }) )
  )

  return {
    type: ADD_RSS_OK,
    loading: false,
    feed
  }
}

function getChannelFail(message) {
  return {
    type: ADD_RSS_FAIL,
    loading: false,
    message
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


      
