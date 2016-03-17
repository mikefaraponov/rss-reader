import {TOGGLE_STATS} from '../../constants'

export function toggleStats(id){
  return {
    type: TOGGLE_STATS,
    id
  }
}
