import { 
  Route, 
  IndexRoute, 
  IndexRedirect 
} from 'react-router'
import App from './containers/App'
import News from './containers/News'
import Home from './containers/Home'
import NotFound from './components/UI/NotFound'
import Root from './components/App/Root'

const CHANNELS_PATH = '/channels/id:id'
const HOME_PATH = '/'
const NOT_FOUND_PATH = '*'

export default (
  <Route component={Root}>
    <Route component={App} path={HOME_PATH}>
      <Route component={News} path={CHANNELS_PATH}/>
      <IndexRoute component={Home}/>
    </Route>
    <Route component={NotFound} path={NOT_FOUND_PATH}/>
  </Route>
);

