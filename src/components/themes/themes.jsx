import React from 'react';
import ReactDOM from 'react-dom';
import styles from './themes.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Wrapper from '../global/Wrapper/wrapper.jsx';
import Title from '../global/Title/title.jsx';

/* cells indexes */
var config=Array(10).fill(0).map((el,i)=>el=i)

var text={
  title:'Meet Skew WordPress Theme, the Best Way to Create Your Site!',
  sub:'Discover elegant solution for your online business fast, reliable, affordable.',
  theme:'dark'

}

class Themes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var cells = config.map(function(elem, i) {
      return (
        <div key={i} styleName={`cell item-${i + 1}`}>
          <div styleName='glass'>
            <span className='fa fa-search fa-2x'></span>
          </div>
          <div styleName='mask'></div>
          <div styleName='child'>
            <span className='fa fa-eye'></span>
            <span className='fa fa-heart'></span>
            <span className='fa fa-heart-o'></span>
          </div>
        </div>
      )
    })
    return (
      <Wrapper>
        <Title {...text}/>
        <div styleName='themes'>
       {cells}
        </div>

      </Wrapper>
    )
  }
}

export default CSSModules(Themes, styles, {allowMultiple: true})
