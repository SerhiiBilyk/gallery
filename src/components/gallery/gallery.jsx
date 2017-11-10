import React from 'react';
import ReactDOM from 'react-dom';
import styles from './gallery.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Wrapper from '../global/Wrapper/wrapper.jsx';
import Title from '../global/Title/title.jsx';
import Hover from '../weare/hover/hover.jsx';

import {imageGenerator} from '../global/imageGenerator.js';

var HoverConfig = [
  {
    icons: [
      'eye','heart'
    ],
    title:'Fullwidth Image Post'

  }, {
    icons: [
          'eye','heart'
    ],
    title:'Fullwidth Video Post'

  }, {
    icons: [
          'eye','heart'
    ],
    title:'Post with Right Sidebar'

  }, {
    icons: [
          'eye','heart'
    ],
    title:'Post with BG Image'
  },{
    icons: [
          'eye','heart'
    ],
    title:'Post with BG Pattern'
  },
  {
    icons: [
          'eye','heart'
    ],
    title:'Image Post with Gallery'
  },
  {
    icons: [
          'eye','heart'
    ],
    title:'Post with Left Sidebar'
  },
  {
    icons: [
          'eye','heart'
    ],
    title:'Post with BG Color'
  },
  {
    icons: [
          'eye','heart'
    ],
    title:'Post with Price Table'
  }
]
var context= require.context('./img', false, /[0-9]+(.jpg)$/);
var image = imageGenerator(context,HoverConfig.length);
class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var images = HoverConfig.map((elem, index) => {
      return (
        <div styleName='gallery' key={index} >
          <Hover
            image={image[index]}
            index={index}
            icons={elem.icons}
            top={'link'}
            link='/'
          />
            <p styleName='title'>{elem.title}</p>
        </div>
      )
    })
    return (
      <div styleName='wrapper'>
        <Wrapper>
          <div styleName='content'>
            {images}
          </div>
        </Wrapper>
      </div>
    )
  }
}

export default CSSModules(Gallery, styles, {allowMultiple: true})
