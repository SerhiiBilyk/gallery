import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './header.scss';


class Header extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName='header'>
        <a href='#/about'>Test</a>
      </div>
    )
  }
}

export default CSSModules(Header, styles)
