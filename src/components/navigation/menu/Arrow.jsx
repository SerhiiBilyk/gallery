
import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './arrow.scss';


class Arrow extends React.PureComponent{
  constructor(props){
    super(props);
  }
  render(){
    var direction=this.props.direction;

    /*if direction==0 DOWN else UP*/
    var dir=(direction)=>!!direction?'down':'up';

    return(
      <span styleName={'wrapper '+dir(direction)}>
        <span className='fa fa-angle-up'></span>
      </span>
    )
  }
}

export default CSSModules(Arrow, styles, {allowMultiple: true})
