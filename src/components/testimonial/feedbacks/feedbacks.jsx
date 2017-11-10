import React from 'react';
import ReactDOM from 'react-dom';
import styles from './feedbacks.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import {config} from '../config.jsx';


function imageGenerator(){
    const imageRequire = require.context("../img", false, /\.jpg$/);
    return Array(config.length).fill(0).map((el, i) =>imageRequire(`./${i + 1}.jpg`))
}
var images = imageGenerator();




class Feedbacks extends React.PureComponent{
  constructor(props){
    super(props);
  }
  render(){
    var feedbacks = config.map((elem, index) => {
      return (
        <li key={index} styleName='cell'>
          <div styleName='content'>
            <div styleName='text'>
              <p styleName='info'>
                <span styleName='name'>{elem.name}</span>
                <span styleName='company'>{elem.company}</span>
              </p>
              <p styleName='description'>{elem.text}</p>
            </div>
          </div>
          <img styleName='img' src={images[index]}/>
        </li>
      )
    })
    return(
      <ul styleName='feedbacks'>
        {feedbacks}
      </ul>
    )
  }
}

export default CSSModules(Feedbacks, styles, {allowMultiple: true})
