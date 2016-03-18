import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Page from '../components/UI/Page'
import ChannelList from '../components/Channels/ChannelList'
import Warning from '../components/UI/Warning'
import {clearError, removeRss} from '../redux/actions/sync/channels'
import {routeActions} from 'react-router-redux'

@connect(stateToProps, mapDispatchToProps)
class Home extends React.Component {

  onItemDelete(i){
    return ev =>
      this.props.removeRss(i)
  }

  onItemOpen(i){
    return ev =>
      this.props.goTo(`/channels/id${i}`)
  }

  onWarningClose(ev){
    this.props.clearError()
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

function mapDispatchToProps(dispatch){
  return {
    ...bindActionCreators({
      clearError,
      removeRss,
      goTo: routeActions.push
    }, dispatch)
  }
}

export default Home
