import Header from '../components/App/Header'
import Footer from '../components/App/Footer'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {routeActions} from 'react-router-redux'
import {getChannelByUrl} from '../redux/actions/getChannelByUrl'
import {clearAllRss} from '../redux/actions/sync/channels'

@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
  onBack(ev){
    this.props.goBack()
  }
  onAdd(ev){
    var x;
    if(x = prompt('Type RSS link!'))
      this.props.getChannelByUrl(x.trim())
  }
  onClear(ev){
    if(confirm('Are you sure?'))
      this.props.clearAllRss();
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

function mapDispatchToProps(dispatch){
  return {
    ...bindActionCreators({
      clearAllRss,
      getChannelByUrl,
      goBack: routeActions.goBack
    }, dispatch)
  }
}

export default App
