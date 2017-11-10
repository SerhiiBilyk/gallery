import React from 'react';
import ReactDOM from 'react-dom';
import styles from './iconbox.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Wrapper from '../global/Wrapper/wrapper.jsx';
import Icon from './Icon.jsx';

var config = [
  {
    icon: 'heart',
    header: 'Fresh & Clean Design',
    text: 'Nulla consectetur ornare nibh, a auctor mauris scelerisque eu proin nec urna quis justo adipiscing auctor ut auctor.'
  }, {
    icon: 'cog',
    header: 'Very Flexible',
    text: 'Nulla consectetur ornare nibh, a auctor mauris scelerisque eu proin nec urna quis justo adipiscing auctor ut auctor.'
  }, {
    icon: 'tablet',
    header: 'Fully Responsible',
    text: 'Nulla consectetur ornare nibh, a auctor mauris scelerisque eu proin nec urna quis justo adipiscing auctor ut auctor.'
  }
]

class Iconbox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var cells = config.map(function(elem, i) {
      return (
        <div key={i} styleName='cell'>
          <div styleName='center'>
            <Icon icon={elem.icon} theme='black' size='big'/>
          </div>
          <div styleName='header'>
            <p>{elem.header}</p>
          </div>
          <div styleName='text'>
            <p>{elem.text}</p>
          </div>
        </div>
      )
    })
    return (
      <Wrapper>
        <div styleName='iconbox'>
          {cells}
        </div>
      </Wrapper>
    )
  }
}

export default CSSModules(Iconbox, styles, {allowMultiple: true})
