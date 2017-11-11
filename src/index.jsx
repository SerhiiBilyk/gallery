import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Main from './routes.jsx';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';




function root(nodeID) {
  const element = document.createElement('div');
  element.id = nodeID;
  document.body.appendChild(element);
  //  element.style.overflowX='hidden';
  return element;

};

var element = root('root');

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Main/>
      </div>
    )
  }
}

ReactDOM.render((
  <Router>
    <App/>
  </Router>
), element);
