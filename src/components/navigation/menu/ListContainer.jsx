import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './menuItems.scss';

class ListContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.collapsed !== this.props.collapsed;
  }
  render() {
    return (
      <ul deep={this.props.deep} styleName={this.props.css}>
        {this.props.children}
      </ul>
    )
  }
}
export default CSSModules(ListContainer, styles, {allowMultiple: true})
