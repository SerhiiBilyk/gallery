import React from 'react';
import ReactDOM from 'react-dom';
import styles from './textarea.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';



class Textarea extends React.PureComponent {
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
      <div styleName='field'>
        <textarea
           placeholder={this.props.placeholder}
           placeholder={this.state.focused ? '':this.props.placeholder}
           onBlur={(e)=>this.blurHandler(e)}
           onFocus={(e)=>this.focusHandler(e)}>
        </textarea>
      </div>
    )
  }
}
export default CSSModules(Textarea, styles, {allowMultiple: true})
