import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage.jsx';

class About extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log('Other compWillMount',this.props)
    return import (/* webpackChunkName: "About" */
    './containers/About/About.jsx').then(component => {
      this.Component = component;
      console.log('this.Component', this.Component)
      this.forceUpdate();
    })
  }

  render() {
    return (
      <div>
        {this.Component
          ? <this.Component.default/>
          : null}
        </div>
    )
  }
}
/**
 * Router prototype
 */
export  const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)
export default Main;
