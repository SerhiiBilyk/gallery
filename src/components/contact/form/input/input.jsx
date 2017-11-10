import React from 'react';
import ReactDOM from 'react-dom';
import styles from './input.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';




class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      focused:false
    }
  }
  focusHandler(e){
    this.setState({
      focused:true
    })
  }
  blurHandler(e){
    this.setState({
      focused:false
    })
  }
  render(){
    return(
      <div styleName={this.props.type}>
        <input
          styleName={`input ${this.props.modifier}`}
          value={this.props.text}
          type={this.props.type}
          placeholder={this.state.focused ? '':this.props.placeholder}
          onBlur={(e)=>this.blurHandler(e)}
          onFocus={(e)=>this.focusHandler(e)}/>
      </div>
    )
  }
}
Input.defaultProps = {
  modifier: 'contact'
};

export default CSSModules(Input, styles, {allowMultiple: true})
