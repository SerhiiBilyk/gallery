import React from 'react';
import ReactDOM from 'react-dom';
import styles from './hamburger.scss';
import CSSModules from 'react-css-modules';
import css from  '../../global/cssmodules.js';
import PropTypes from 'prop-types';


class Hamburger extends React.PureComponent {
  constructor(props) {
    super(props);
    this.clickHandler=this.clickHandler.bind(this)
  }
  clickHandler(e){
    this.props.change(e)
  }
  render() {
    return (
      <div styleName='wrapper'>
        <span styleName='height-fix'>&nbsp;</span>;
      <ul id="hamburger"
        styleName={'hamburger '+(this.props.collapsed?'':'expanded')}
        onClick={(e) => this.clickHandler(e)}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    )
  }
}
Hamburger.propTypes={
change:PropTypes.func.isRequired,
collapsed:PropTypes.number.isRequired
}
export default CSSModules(Hamburger,styles,{allowMultiple:true})
