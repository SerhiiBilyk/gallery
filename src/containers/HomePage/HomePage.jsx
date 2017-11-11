import React from 'react';
import ReactDOM from 'react-dom';

import CSSModules from 'react-css-modules';
import Header from '../../components/header/header.jsx';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    this.setState({show: true})
  }
  render() {
    return (
      <div>
       <Header/>      
      </div>
    )
  }
}
