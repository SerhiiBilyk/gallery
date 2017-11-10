import React from 'react';
import ReactDOM from 'react-dom';
import styles from './About.scss';
import CSSModules from 'react-css-modules';





export default class About extends React.PureComponent{
  constructor(props){
    super(props)
  }
  render(){
    console.log('About')
    return(
      <div>
        <h1>{'About'}</h1>
        <a href="#">back</a>
      </div>
    )
  }
}
