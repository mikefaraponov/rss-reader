import Header from '../components/Header'
import {connect} from 'react-redux'
import Icon from '../components/Icon'
import {routeActions} from 'react-router-redux'
import {getChannelByUrl} from '../redux/actions/getChannelByUrl'
import {clearAllRss} from '../redux/actions/sync/channels'

@connect((state, own) => ({
  loading: state.channels.loading, 
  ...own
}) )
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
          pathName={this.props.location.pathname}
          isLoading={this.props.loading}
          onAdd={::this.onAdd}
          onClear={::this.onClear}
          onBack={::this.onBack}
        />
        {this.props.children}
        <footer className="app-footer">Powered by &copy;&nbsp;
          <a className="power-source" href="//mikefaraponov.github.io">Mike F.</a>&nbsp;and&nbsp;
          <Icon fa='stack-overflow'/>&nbsp;
          <Icon fa='github'/>&nbsp;
          <Icon fa='css3'/>&nbsp;
          <Icon fa='html5'/>&nbsp;
        </footer>
      </main>
    );
  }
}
export default App
