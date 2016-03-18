import Page from '../components/UI/Page'
import NewsList from '../components/News/NewsList'
import Stats from '../components/News/Stats'
import getAuthorsCount from '../redux/utils/getAuthorsCount'

import Icon from '../components/UI/Icon'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {getFeedsById} from '../redux/actions/getFeedsById'
import {toggleStats} from '../redux/actions/sync/feeds'
import {routeActions} from 'react-router-redux'

@connect(mapStateToProps, mapDispatchToProps)
class News extends React.Component {
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  componentWillMount() {
    const {
      id, channels, getFeedsById, notFound
    } = this.props
    console.log(this.props)
    if( channels.find( (el, i) => i == id ) ){
      getFeedsById(id)
      this.interval = setInterval(getFeedsById.bind(null, id), 5 * 60 * 1000)
    } 
    else 
      notFound('/not_found')

  }

  onMessageOpen(i){
    return (ev) => {
      this.props.toggleStats(i)
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
      <Page className="is-text-centered">
        <Icon fa="cog fa-spin"/>
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

function mapDispatchToProps(dispatch){
  return {
    ...bindActionCreators({
      getFeedsById,
      toggleStats,
      notFound: routeActions.replace
    }, dispatch)
  }
}
export default News
