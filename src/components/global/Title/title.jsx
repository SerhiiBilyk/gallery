import React from 'react';
import ReactDOM from 'react-dom';
import styles from './title.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

class Title extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    var {title, sub, theme} = this.props;

    return (
      <div styleName={`title ${this.props.theme}`}>
        <h1>{this.props.title}</h1>
        <p>{this.props.sub}</p>
      </div>
    )
  }
}
Title.propTypes={
theme:PropTypes.oneOf(['white','dark']),
title:PropTypes.string.isRequired
}
export default CSSModules(Title, styles, {allowMultiple: true});
