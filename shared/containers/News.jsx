import {connect} from 'react-redux'
import Page from '../components/Page'
import Stats from '../components/Stats'
import NewsList from '../components/NewsList'
import {getFeedsById} from '../redux/actions/getFeedsById'
import {toggleStats} from '../redux/actions/sync/feeds'
import getAuthorsCount from '../redux/utils/getAuthorsCount'

@connect((state, own) => ({
  feeds: state.feeds.arrOfFeeds, 
  id: own.params.id,
  isLoading: state.feeds.loading,
  icon: state.feeds.icon
}))
class News extends React.Component {

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  componentWillMount() {
    const getFeeds = this.props.dispatch.bind(null, getFeedsById(this.props.id))
    getFeeds()
    this.interval = setInterval(getFeeds, 5 * 60 * 1000)
  }

  onMessageOpen(i){
    return (ev) => {
      this.props.dispatch(toggleStats(i))
    }
  }

  render(){
    const { feeds, icon, isLoading } = this.props

    return (
      isLoading?
      <Page>
        <div className="is-text-centered">Loading...</div>
      </Page>
      :
      <Page>
          <Stats stats={{
              messagesCount: feeds.length,
              authorsCount: getAuthorsCount(feeds),
              imageUrl: icon
             }}/>
          <NewsList
            isLoading={isLoading}
            news={feeds} 
            onOpen={::this.onMessageOpen}
          />
      </Page>
    );
  }
}

export default News
