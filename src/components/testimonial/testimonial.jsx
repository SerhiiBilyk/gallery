import React from 'react';
import ReactDOM from 'react-dom';
import styles from './testimonial.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Wrapper from '../global/Wrapper/wrapper.jsx';
import Title from '../global/Title/title.jsx';
import Feedbacks from './feedbacks/feedbacks.jsx';
import Tabs from './tabs/tabs.jsx';

import {config} from './config.jsx';


class Testimonial extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {


    return (
      <div id='testimonial' styleName='wrapper'>
        <Wrapper>
          <Title theme='dark' title='What Our Clients Say About Us'/>
          <Feedbacks/>
          <Tabs/>
        </Wrapper>
      </div>
    )
  }
}

export default CSSModules(Testimonial, styles, {allowMultiple: true})
