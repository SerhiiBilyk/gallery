import React from 'react';
import ReactDOM from 'react-dom';
import styles from './link.scss';
import CSSModules from 'react-css-modules';
import {Route,Link as RouterLink} from 'react-router-dom'


class Link extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <span styleName='link' >
        <RouterLink to={this.props.to}>{this.props.children}</RouterLink>
      </span>
    )
  }
}
export default CSSModules(Link, styles, {allowMultiple: true});
