import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import Skew from '../Skew/skew.jsx';

class SkewSection extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.children}
        <Skew index={this.props.zIndex} />
      </div>
    )
  }
}

export default CSSModules(SkewSection);
