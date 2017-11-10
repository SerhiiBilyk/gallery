import React from 'react';
import ReactDOM from 'react-dom';
import styles from './form.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Input from './input/input.jsx';
import Textarea from './textarea/textarea.jsx';

class Form extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div styleName='form'>
        <form action='#' method='post'>
          <Input type='text' placeholder='Name *'/>
          <Input type='email' placeholder='Email *'/>
          <Input type='text' placeholder='Subject *'/>
          <Textarea placeholder='Message *'/>
          <Input type='submit' text='Send message!'/>
        </form>
      </div>
    )
  }
}

export default CSSModules(Form, styles, {allowMultiple: true})
