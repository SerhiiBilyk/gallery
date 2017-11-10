import React from 'react';
import ReactDOM from 'react-dom';
import styles from './blog.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Wrapper from '../global/Wrapper/wrapper.jsx';
import Title from '../global/Title/title.jsx';
import Hover from '../weare/hover/hover.jsx';

import {imageGenerator} from '../global/imageGenerator.js';

/*
var context= require.context('./img', false, /[0-9]+(.jpg)$/);
var image = imageGenerator(context,config.length);
*/
var text = "Nullam sit amet feugiat diam, non egestas ante maecenas. Sed sed tellus bibendum, auctor est non, pellentesque mauris. Etiam justo magna, imperdiet sit amet dui vel, hendrerit condimentum quam. Proin cursus magna felis, id rutrum tortor lacinia in. Fusce condimentum dui nisl, a mollis arcu blandit sit amet. Duis faucibus gravida libero ac blandit. Vivamus faucibus gravida dapibus. Quisque sed viverra purus, at congue mauris. Sed eget tincidunt elit. Phasellus volutpat lacus eu lacus lacinia interdum. Vestibulum bibendum, nisi vel sodales tempor, quam nisi venenatis mi, quis dictum lectus nulla vitae magna. Suspendisse elementum velit lorem, non pulvinar eros venenatis id. Nam ac molestie metus. Nullam sit amet feugiat diam, non egestas ante maecenas. Sed sed tellus bibendum, auctor est non, pellentesque mauris. Etiam justo magna, imperdiet sit amet dui vel, hendrerit condimentum quam. Proin cursus magna felis, id rutrum tortor lacinia in. Fusce condimentum dui nisl, a mollis arcu blandit sit amet. Duis faucibus gravida libero ac blandit. Vivamus faucibus gravida dapibus. Quisque sed viverra purus, at congue mauris. Sed eget tincidunt elit. Phasellus volutpat lacus eu lacus lacinia interdum. Vestibulum bibendum, nisi vel sodales tempor, quam nisi venenatis mi, quis dictum lectus nulla vitae magna suspendisse elementum velit lorem, non pulvinar eros venenatis id. Nam ac molestie metus fusce nec condimentum dui nisl, a mollis arcu blandit sit amet. Duis faucibus gravida libero ac blandit. Vivamus faucibus gravida dapibus. Quisque sed viverra purus, at congue";

var config = [
  {
    icons: [
      'eye', 'heart'
    ],
    title: 'Fullwidth Video Post',
    date: 'March 14, 2016',
    by: 'gt3dev',
    category: 'Advertisement',
    comments: [1, 2, 3]
  }, {
    icons: [
      'eye', 'heart'
    ],
    title: 'Post with Right Sidebar',
    date: 'February 23, 2016',
    by: 'gt3dev',
    category: 'People',
    comments: [1, 2]
  }, {
    icons: [
      'eye', 'heart'
    ],
    title: 'Standard Post',
    date: 'February 15, 2016',
    by: 'gt3dev',
    category: 'Business',
    comments: [1, 2]
  }, {
    icons: [
      'eye', 'heart'
    ],
    title: 'Post with BG Pattern',
    date: 'January 28,2016',
    by: 'gt3dev',
    category: 'traveling',
    comments: [1]
  }
]
var context = require.context('./img', false, /[0-9]+(.jpg)$/);
var images = imageGenerator(context, config.length);

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var image = config.map((elem, index) => {
      return (
        <div key={index} styleName='content'>
          <div styleName='img'>
            <Hover image={images[index]} index={index} icons={elem.icons} top={'link'} link='/'/>
          </div>
          <div styleName='text'>
            <p styleName='title'>{elem.title}</p>
            <p styleName='info'>
              <span>
                {elem.date} / by {elem.by} / {elem.category} / {elem.comments.length}
              </span>
            </p>
            <p styleName='main'>
              {text}
            </p>

          </div>
        </div>
      )
    })
    return (
      <div styleName='blog'>
        <Wrapper>
          {image}
        </Wrapper>
      </div>
    )
  }
}

export default CSSModules(Blog, styles, {allowMultiple: true})
