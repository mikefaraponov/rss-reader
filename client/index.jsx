import 'bulma'
import styles from './rss.css'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import store from '../shared/redux/store';
import routes from '../shared/routes';

render(

  <Provider store={store}>
    <Router children={routes} history={browserHistory}/>
  </Provider>, 

  document.getElementById('root') 

);
