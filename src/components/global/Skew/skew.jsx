import React from 'react';
import ReactDOM from 'react-dom';
import styles from './skew.scss';
import CSSModules from 'react-css-modules';




export const Skew=(props)=>{
  return (
  <div styleName={`skew zindex-${props.index}`}>
    <div styleName='rotate'></div>
  </div>
)};

Skew.defaultProps = {
  index: 0
};

export default CSSModules(Skew,styles, {allowMultiple: true});
