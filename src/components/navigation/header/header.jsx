import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../slider/slider.jsx';
import Skew from './../global/Skew/skew.jsx';
import CSSModules from 'react-css-modules';
import styles from './header.scss';




/**
 * TODO
 * set addEventListeners from Navigation component to Header
 * and then only send theme property to menu items
 * it will avoid any boolean comparisons
 */
 class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div styleName='header'>
        <Slider/>
        <Skew/>
      </div>
    )
  }
}


export default CSSModules(Header, styles)
