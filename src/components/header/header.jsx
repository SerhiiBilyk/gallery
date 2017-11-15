import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './header.scss';
import PropTypes from 'prop-types';
import Worker from 'worker-loader!./worker';
import {benchmark} from './benchmark.js';
import {Map} from 'immutable';

console.log('Immutable')
var map1=Map({a:1,b:2});
var map2=map1.set('b',10);
console.log(map1.get('b'),map2.get('b'))
const worker = new Worker();
console.log(worker)
class Header extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    worker.addEventListener('message', e => {
      console.log('EventListener message', e)
    })
  }
  componentDidMount() {}
  clickHandler(e) {

    console.log('worker', worker)
    worker.postMessage(['post message'])
    console.log('Message posted to worker')

  }
  withoutWorker() {
    benchmark();

  }

  render() {
    return (
      <div styleName='header'>
        <button id='click' onClick={e => this.clickHandler(e)}>With Worker</button>
        <button onClick={e => this.withoutWorker(e)}>Without worker</button>
        <a href='#/about'>Test,theme{this.props.theme}</a>
      </div>
    )
  }
}
Header.propTypes = {
  theme: PropTypes.oneOf(['empty', 'filled'])
}
export default CSSModules(Header, styles)
