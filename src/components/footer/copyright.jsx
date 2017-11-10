import React from 'react';
import ReactDOM from 'react-dom';
import styles from './copyright.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Wrapper from '../global/Wrapper/wrapper.jsx';

var nav=['Home', 'About', 'Portfolio', 'Blog', 'Contacts'];

class Copyright extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var navigation=nav.map((elem,index)=>{
      return(
        <li key={index} styleName='navItem'>{elem}</li>
      )
    })
    return (
      <Wrapper>
          <div styleName='copyright'>
            <p styleName='left'>
              Copyright © 2020 Skew WordPress Theme. All Rights Reserved.
            </p>
            <div styleName='right'>
              <ul styleName='navigation'>
                {navigation}
              </ul>

            </div>
          </div>
      </Wrapper>
    )
  }
}

export default CSSModules(Copyright, styles, {allowMultiple: true})
