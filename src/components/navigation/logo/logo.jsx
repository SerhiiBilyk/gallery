import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './logo.scss';

class Logo extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div styleName='logo'>&nbsp;
        <img src={this.props.img}/>
      </div>
    )
  }
}
export default CSSModules(Logo,styles,{allowMultiple: true});
