import React from 'react';
import ReactDOM from 'react-dom';
import styles from './wrapper.scss';
import CSSModules from 'react-css-modules';




 const Wrapper=(props)=>(
  <div styleName='wrapper'>
    {props.children}
  </div>
);


export default CSSModules(Wrapper,styles);
