import { Route, IndexRoute, IndexRedirect } from 'react-router'
import App from './containers/App'
import News from './containers/News'
import Home from './containers/Home'
import Page from './components/Page'
import NotFound from './components/NotFound'
import Icon from './components/Icon'
import Root from './components/Root'

export default (
  <Route component={Root}>
      <Route component={App} path='/' >
        <Route component={News} path='/channels/id:id'/>
        <IndexRoute component={Home}/>
      </Route>
      <Route path="*" component={NotFound}/>
  </Route>
);

