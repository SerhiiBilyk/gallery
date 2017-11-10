import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './results.scss';
import Icon from '../iconbox/Icon.jsx';
import Wrapper from '../global/Wrapper/wrapper.jsx';
import Button from '../global/Button/button.jsx';
import Timer from '../global/Timer/Timer.jsx';
import IconTimer from './IconTimer/IconTimer.jsx';

var config = [
  {
    icon: 'thumbs-o-up',
    header: 'Awesome Works',
    max: 608,
    step: 2
  }, {
    icon: 'users',
    header: 'Happy Customers',
    max: 12400,
    step: 20
  }, {
    icon: 'coffee',
    header: 'Cups of coffee',
    max: 10000,
    step: 20
  }
]


class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='results' styleName='results'>
        <Wrapper>
          <div styleName='row'>
          <IconTimer config={config}/>
          </div>
          <div styleName='row'>
            <p styleName='text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu mi quis mauris venenatis viverra. Pellentesque pellentesque rutrum arcu, eu lacinia dui eleifend sed. Donec fermentum, nisi eget pharetra venenatis, purus augue ultrices elit, quis auctor dolor diam ac nibh. Etiam rutrum aliquet vestibulum. Etiam ligula elit, molestie sed sagittis sed, mollis et elit. Phasellus vehicula.</p>
            <Button theme='empty' text='View All Works'/>
            <Button theme='filled' text='Place an Order'/>
          </div>
        </Wrapper>
      </div>
    )
  }
}

export default CSSModules(Results, styles, {allowMultiple: true});
