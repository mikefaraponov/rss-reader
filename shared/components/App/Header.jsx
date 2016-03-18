import {Link, IndexLink } from 'react-router'
import Icon from '../UI/Icon'


class Header extends React.Component {
  static logoStyle = { fontSize: '1.5em' }
  toggle(){
    this.setState({active: !this.state.active})
  }
  constructor(...args){
    super(...args);
    this.state = {
        active: false
    }
  }
  render(){
    const {onAdd, onClear, onBack, pathName, isLoading, channelsCount} = this.props,
      active = this.state.active ? 'is-active': '',
      isHome = pathName === '/';
    return (
      <header className="header">
        <div className="container">
          <div className="header-left">
            <IndexLink className="header-item logo" to="/">
              <strong style={Header.logoStyle}> 
                <Icon fa="rss"/>&nbsp;RSS
              </strong>
            </IndexLink>
          </div>

          <span className={`header-toggle ${active}`} onClick={::this.toggle} key="1">
            <span></span>
            <span></span>
            <span></span>
          </span>
      
          <div className={`header-right header-menu ${active}`}>
            {
              isHome?
                <span className="header-item">
                  <span 
                    className="tag is-primary is-medium" 
                    id="channels">
                    {`${channelsCount} Channels`} 
                  </span>
                  <a className={`button is-success ${isLoading?'is-loading':''}`} 
                     onClick={onAdd}>
                    <Icon fa='plus'/>&nbsp;Add
                  </a>
                  <a className="button is-danger" 
                     onClick={onClear}>
                    <Icon fa="times"/>&nbsp;Clear Channels
                  </a>
                </span>
                :
                <span className="header-item" key='2'>
                  <a className="button is-info" onClick={onBack}>
                    <Icon fa="arrow-circle-o-left"/>&nbsp;Back
                  </a>
                </span>
            }
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
