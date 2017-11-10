import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage.jsx';
import Other from  './containers/Other/Other.jsx';

/**
 * Router prototype
 */
export  const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/:other' component={Other}/>
    </Switch>
  </main>
)
export default Main;
