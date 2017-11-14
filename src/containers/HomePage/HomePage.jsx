import React from 'react';
import ReactDOM from 'react-dom';
import styles from './HomePage.scss';
import CSSModules from 'react-css-modules';
import Header from '../../components/header/header.jsx';

 class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      test:'none'
    }
  }
  handleClick() {
    this.setState({show: true,test:'test'})
  }
  render() {
    return (
      <div>
        <button id='btn' styleName={this.state.test} onClick={(e) => this.handleClick()}>Click</button>
        <p>hello</p>
        {this.state.show
          ? <Header/>
          : null}
      </div>
    )
  }
}
export default CSSModules(HomePage,styles,{allowMultiple:true});
