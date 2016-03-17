import {REMOVE_RSS, CLEAR_ALL_RSS, CLEAR_RSS_ERROR} from '../../constants'

export function removeRss(id){
  const { stringify, parse } = JSON;
  const channels = parse(localStorage.channels)

  localStorage.setItem('channels', 
    stringify(
      channels.filter((channel, i) => i !== id)
    )
  )

  return {
    type: REMOVE_RSS,
    id
  }
}

export function clearAllRss(){
  delete localStorage.channels
  return {
    type: CLEAR_ALL_RSS,
  }
}

export function clearError(){
  return {
    type: CLEAR_RSS_ERROR,
  }
}
