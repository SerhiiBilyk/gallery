import React from 'react';
import ReactDOM from 'react-dom';
import styles from './contact.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Wrapper from '../global/Wrapper/wrapper.jsx';
import Form from './form/form.jsx';


var config=[
  {
    icon:'home',
    text:'5512 Lorem Ipsum Vestibulum 666/13'
  },
  {
    icon:'phone',
    text:'+1 800 789 50 12, +1 800 450 6935'
  },
  {
    icon:'envelope',
    text:'mail@yourwebsite.com'
  },
  {
    icon:'skype',
    text:'compname'
  },
  {
    icon:'twitter',
    text:'Twitter'
  },
  {
    icon:'facebook-square',
    text:'facebook'
  },
  {
    icon:'dribbble',
    text:'dribbble'
  },
  {
    icon:'flickr',
    text:'Flickr'
  },
  {
    icon:'youtube-square',
    text:'YouTube'
  }
]


class Contact extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
var list=config.map((elem,index)=>{
  return(
    <li key={index} styleName='cell'>
      <span className={`fa fa-${elem.icon}`}></span>
      <span styleName='text'>{elem.text}</span>
    </li>
  )
})
    return (
      <div styleName='contact'>
        <Wrapper>
          <div styleName='message'>
            <p styleName='title'>
              Get in Touch with Us!
            </p>
            <p styleName='sub'>
              Your email address will not be published. Required fields are marked *
            </p>
            <Form/>
          </div>
          <div styleName='info'>
            <p styleName='title'>
              Contact Information
            </p>
            <ul styleName='list'>
              {list}
            </ul>
          </div>
        </Wrapper>
      </div>
    )
  }
}

export default CSSModules(Contact, styles, {allowMultiple: true})
