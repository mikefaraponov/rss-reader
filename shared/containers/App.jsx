import Header from '../components/Header'
import Footer from '../components/Footer'
import {connect} from 'react-redux'
import {routeActions} from 'react-router-redux'
import {getChannelByUrl} from '../redux/actions/getChannelByUrl'
import {clearAllRss} from '../redux/actions/sync/channels'

@connect(mapStateToProps)
class App extends React.Component {
  onBack(ev){
    this.props.dispatch(routeActions.goBack())
  }
  onAdd(ev){
    var x;
    if(x = prompt('Type RSS link!'))
      this.props.dispatch(getChannelByUrl(x.trim()))
  }
  onClear(ev){
    ev.preventDefault()
    if(confirm('Are you sure?'))
      this.props.dispatch(clearAllRss());
  }
  render(){
    return (
      <main id="blanket">
        <Header 
          channelsCount={this.props.channelsCount}
          pathName={this.props.location.pathname}
          isLoading={this.props.loading}
          onAdd={::this.onAdd}
          onClear={::this.onClear}
          onBack={::this.onBack}
        />
        {this.props.children}
        <Footer/>
      </main>
    );
  }
}

function mapStateToProps({channels}){
  return {
    loading: channels.loading,
    channelsCount: channels.arrOfChannels.length
  }
}

export default App
