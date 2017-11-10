import React from 'react';
import ReactDOM from 'react-dom';
import styles from './lazy.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

class Lazy extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      load: false
    }
    this.handlePageYOffset = this.handlePageYOffset.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handlePageYOffset,  true)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlePageYOffset, true)
  }
  handlePageYOffset() {
    console.log('scroll sdf')
    if (window.pageYOffset > 100) {
      window.removeEventListener('scroll', this.handlePageYOffset, true);
      this.setState({
        load: true
      })
    }
  }


  render() {
    return this.state.load ? (<div styleName='lazy'>{this.props.children}</div>) : null
  }
}

export default CSSModules(Lazy, styles, {allowMultiple: true})
