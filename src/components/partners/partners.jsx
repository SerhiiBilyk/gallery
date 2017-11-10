import React from 'react';
import ReactDOM from 'react-dom';
import styles from './partners.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Wrapper from '../global/Wrapper/wrapper.jsx';
import {imageGenerator} from '../global/imageGenerator.js';
console.log('asd', imageGenerator)
/* cells indexes */
var context = require.context('./img', false, /[0-9]+(.png)$/);
var images = imageGenerator(context, 6, 'png');

class Partners extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const logos=images.map((elem,index)=>{
      return(
        <li styleName='cell' key={index}>
          <img styleName='img' src={elem}/>
        </li>
      )
    })

    return (
      <div styleName='partners'>
        <Wrapper>
          <ul>
            {logos}
          </ul>
        </Wrapper>
      </div>
    )
  }
}

export default CSSModules(Partners, styles, {allowMultiple: true})
