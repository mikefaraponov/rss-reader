import Page from '../components/UI/Page'
// import Stats from '../components/Stats'
import NewsList from '../components/News/NewsList'
import Stats from '../components/News/Stats'
import getAuthorsCount from '../redux/utils/getAuthorsCount'
import {connect} from 'react-redux'
import {getFeedsById} from '../redux/actions/getFeedsById'
import {toggleStats} from '../redux/actions/sync/feeds'
import {routeActions} from 'react-router-redux'

@connect(mapStateToProps)
class News extends React.Component {
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  componentWillMount() {
    const {
      id, channels, dispatch
    } = this.props

    if( channels.find( (el, i) => i == id ) ){
      const getFeeds = dispatch.bind(null, getFeedsById(id))
      getFeeds()
      this.interval = setInterval(getFeeds, 5 * 60 * 1000)
    } 
    else 
      dispatch(routeActions.replace('/not_found'))

  }

  onMessageOpen(i){
    return (ev) => {
      this.props.dispatch(toggleStats(i))
    }
  }

  render(){
    const { feeds, icon, isLoading } = this.props,
    stats = {
      messagesCount: feeds.length,
      authorsCount: getAuthorsCount(feeds),
      imageUrl: icon
    }
    return isLoading?
      <Page>
        <div className="is-text-centered">Loading...</div>
      </Page>
      :
      <Page>
          <Stats stats={stats}/>
          <NewsList
            isLoading={isLoading}
            feeds={feeds}
            onOpen={::this.onMessageOpen}
          />
      </Page>
    
  }
}

function mapStateToProps({channels, feeds}, props){
  return {
    id: props.params.id,
    icon: feeds.icon,
    feeds: feeds.arrOfFeeds, 
    channels: channels.arrOfChannels,
    isLoading: feeds.loading
  }
}

export default News
