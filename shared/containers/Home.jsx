import {connect} from 'react-redux'
import Page from '../components/Page'
import ChannelList from '../components/ChannelList'
import Warning from '../components/Warning'
import {clearError, removeRss} from '../redux/actions/sync/channels'
import {routeActions} from 'react-router-redux'

@connect(state => ({
  warning: state.channels.message,
  channels: state.channels.arrOfChannels
}))
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
    const {
      warning, 
      channels
    } = this.props
    return (
      <Page>
          <Warning 
            onClose={::this.onWarningClose} 
            message={warning}
          />
          <ChannelList 
            channels={channels.map(el => ({
                ...el.meta,
                pubDate: el.entries[0] && el.entries[0].pubDate
              }))
            }
            onItemDelete={::this.onItemDelete}
            onItemOpen={::this.onItemOpen}
          />
      </Page>
    )
  }
} 

export default Home
