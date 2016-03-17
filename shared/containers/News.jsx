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
  onMessageOpen(i){
    return () => {
      this.props.dispatch(toggleStats(i))
    }
  }
  componentWillMount() {
    this.props.dispatch(getFeedsById(this.props.id))
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
