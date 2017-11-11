import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './header.scss';
import FileInput from './FileInput/FileInput.jsx';


class Header extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName='header'>
        <FileInput/>

      </div>
    )
  }
}

export default CSSModules(Header, styles)
