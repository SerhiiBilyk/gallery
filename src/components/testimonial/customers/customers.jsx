import React from 'react';
import ReactDOM from 'react-dom';
import styles from './customers.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Icon from '../../iconbox/Icon.jsx';
import Timer from '../../global/Timer/Timer.jsx';



class Customers extends React.PureComponent{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div styleName='customers'>
        <div styleName='icon'>
          <Icon icon='group' theme='black' size='middle'/>
        </div>
        <div styleName='content'>
          <Timer max={12400} step={100} container='testimonial'/>
          <p styleName='title'>Customers</p>
        </div>
      </div>
    )
  }
}
export default CSSModules(Customers, styles, {allowMultiple: true})
