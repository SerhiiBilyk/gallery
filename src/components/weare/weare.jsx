import React from 'react';
import ReactDOM from 'react-dom';
import styles from './weare.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Wrapper from '../global/Wrapper/wrapper.jsx';
import Title from '../global/Title/title.jsx';
import Hover from './hover/hover.jsx';
import {imageGenerator} from '../global/imageGenerator.js';

var HoverConfig = [
  {
    icons: [
      'facebook-square', 'twitter', 'tumblr'
    ],
    top:null,
    name: 'Tom Sawyer',
    position: 'Developer',
    description: 'In luctus sollicitudin interdum egestas ac non tincidunt a pelentesque tempor.'
  }, {
    icons: [
      'facebook-square', 'pinterest', 'google-plus-official'
    ],
    top:null,
    name: 'Anna Smith',
    position: 'Project Manager',
    description: 'In luctus sollicitudin interdum egestas ac non tincidunt a pelentesque tempor.'
  }, {
    icons: [
      'facebook-square', 'pinterest', 'instagram'
    ],
    top:null,
    name: 'John Doe',
    position: 'CEO',
    description: 'In luctus sollicitudin interdum egestas ac non tincidunt a pelentesque tempor.'
  }, {
    icons: [
      'facebook-square', 'skype', 'envelope'
    ],
    top:'link',
    name: 'We Are Hiring',
    position: 'Designer',
    description: 'In luctus sollicitudin interdum egestas ac non tincidunt a pelentesque tempor.'
  }
]

var context= require.context('./img', false, /[0-9]+(.jpg)$/);
var image = imageGenerator(context,HoverConfig.length);


class WeAre extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var images = HoverConfig.map((elem, index) => {
      return (
        <div styleName='container' key={index} >
          <Hover
            image={image[index]}
            index={index}
            icons={elem.icons}
            top={elem.top}/>
            <p styleName='name'>{elem.name}</p>
            <p styleName='position'>{elem.position}</p>
            <p styleName='description'>{elem.description}</p>
        </div>
      )
    })
    return (
      <div styleName='wrapper'>
        <Wrapper>
          <Title theme='white' title='Who We Are'/>
           {images}
        </Wrapper>
      </div>
    )
  }
}

export default CSSModules(WeAre, styles, {allowMultiple: true})
