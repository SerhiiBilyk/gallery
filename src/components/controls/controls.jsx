import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './controls.scss';
import PropTypes from 'prop-types';




class Controls extends React.PureComponent {
  constructor(props) {
    super(props);
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
