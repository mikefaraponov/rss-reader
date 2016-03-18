import {connect} from 'react-redux'
import Page from '../components/Page'
import ChannelList from '../components/ChannelList'
import Warning from '../components/Warning'
import {clearError, removeRss} from '../redux/actions/sync/channels'
import {routeActions} from 'react-router-redux'

@connect(stateToProps)
class Home extends React.Component {

  onItemDelete(i){
    return ev =>
      this.props.dispatch(removeRss(i))
  }

  onItemOpen(i){
    return ev =>
      this.props.dispatch(routeActions.push(`/channels/id${i}`))
  }

  onWarningClose(ev){
    this.props.dispatch(clearError())
  }

  render(){
    const {warning, channels} = this.props,
    channelsWithPubDate = channels.map(el => ({
      ...el.meta,
      pubDate: el.entries[0] && (el.entries[0].pubDate || el.entries[0].pubdate)
    }))
    return (
      <Page>
        <Warning 
          onClose={::this.onWarningClose} 
          message={warning}
        />
        <ChannelList 
          channels={channelsWithPubDate}
          onItemDelete={::this.onItemDelete}
          onItemOpen={::this.onItemOpen}
        />
      </Page>
    )
  }
} 

function stateToProps({channels}){
  return {
    warning: channels.message,
    channels: channels.arrOfChannels
  }
}

export default Home
