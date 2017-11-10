import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './icontimer.scss';
import Icon from '../../iconbox/Icon.jsx';
import Timer from '../../global/Timer/Timer.jsx';



class IconTimer extends React.PureComponent{
  constructor(props) {
    super(props);
  }
  render(){
    var cells = this.props.config.map(function(elem, i) {
      return (
        <div styleName='cell' key={i}>
          <div styleName='icon'>
            <Icon icon={elem.icon} theme='white' size='middle'/>
          </div>
          <div styleName='content'>
            <p styleName='timer'>
              <Timer max={elem.max} step={elem.step} container='results'/>
            </p>
            <p styleName='header'>
              {elem.header}
            </p>
          </div>
        </div>
      )
    })
    return (
      <div>
        {cells}
      </div>
    )
  }
}

export default CSSModules(IconTimer, styles, {allowMultiple: true});
