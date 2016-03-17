import {Link, IndexLink } from 'react-router'
import Icon from './Icon'


class Header extends React.Component {
    constructor(...args){
        super(...args);
        this.state = {
            active: false
        }
    }
    toggle(){
        this.setState({active: !this.state.active})
    }
    render(){
        const {onAdd, onClear, onBack, pathName, isLoading} = this.props,
          active = this.state.active ? 'is-active': '',
          isHome = pathName === '/';
          
        return (
          <header className="header" style={{position: 'fixed', width: '100%', top: 0}}>
            <div className="container">
              <div className="header-left">
                <Link className="header-item logo" to={"/"} >
                  <strong style={{"fontSize": '1.5em'}}> 
                    <Icon fa="rss"/>&nbsp;RSS
                  </strong>
                </Link>
              </div>
              <span className={`header-toggle ${active}`} onClick={::this.toggle} key="1">
                    <span></span>
                    <span></span>
                    <span></span>
              </span>
              
                  <div className={`header-right header-menu ${active}`}>
                    {
                      isHome?
                          [
                            <span className="header-item" key='1'>
                              <a className={`button is-success ${isLoading?'is-loading':''}`} onClick={onAdd}>
                                <Icon fa='plus'/>&nbsp;Add
                              </a>
                            </span>,

                            <span className="header-item" key='2'>
                              <a className="button is-danger" onClick={onClear}>
                                <Icon fa="times"/>&nbsp;Clear Channels
                              </a>
                            </span>
                          ]
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
