import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Other.scss';
import CSSModules from 'react-css-modules';





function Other(props){
  return(
    <div styleName='wrapper'>
      <h1>{props.match.params.other}</h1>
    </div>
  )
}

export default CSSModules(Other, styles, {allowMultiple: true})
