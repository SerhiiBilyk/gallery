import React from 'react';
import ReactDOM from 'react-dom';
import styles from './footer.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Wrapper from '../global/Wrapper/wrapper.jsx';
import Input from '../contact/form/input/input.jsx';
import Icon from '../iconbox/Icon.jsx';
import Copyright from './copyright.jsx';
var config=[
  'facebook-official',
  'twitter',
  'linkedin-square',
  'delicious',
  'vimeo',
  'flickr',
  'pinterest',
  'tumblr-square',
  'youtube',
  'instagram',
  'google-plus',
  'dribbble'
];
var nav=['Home', 'About', 'Portfolio', 'Blog', 'Contacts'];

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var icons=config.map((elem,index)=>{
    return(
      <li styleName={`cell item-${index+1}`} key={index}>
        <Icon icon={elem} theme='white' size='small'/>
      </li>
    )
    })

    return (
      <div>
      <div styleName='footer'>
        <Wrapper>
          <p styleName='title'>
            {this.props.title}
          </p>
          {this.props.extended && (
            <div styleName='header'>
              <p styleName='sub'>
                Subscribe to our newsletter email to get notification about fresh news, latest promos, giveaways and free stuff from Skew. Stay always up-to-date!
              </p>
              <form styleName='form' action='#' method='post'>
                <Input type='email' placeholder='Enter your email' modifier='subscribe' />
                <Input type='submit' modifier='subscribe' />
              </form>
            </div>
          )}
          <ul styleName='container'>
            {icons}
          </ul>
        </Wrapper>
      </div>

    </div>
    )
  }
}

export default CSSModules(Footer, styles, {allowMultiple: true})
