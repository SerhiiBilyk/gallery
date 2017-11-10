import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../slider/slider.jsx';
import Skew from './../global/Skew/skew.jsx';
import CSSModules from 'react-css-modules';
import styles from './header.scss';

 class Header extends React.PureComponent{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div styleName='header'>
        <Slider/>
        <Skew index={10}/>
      </div>
    )
  }
}


export default CSSModules(Header, styles)
