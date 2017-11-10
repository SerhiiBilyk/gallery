import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './menuItems.scss';
import Link from '../../global/Link/Link.jsx';
import Arrow from './Arrow.jsx';


class ListItem extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      show: 1.1
    }

  }
  /*
  method is invoked before a mounted component receives new props
  ...onResize this component receives every time other props from Navigation component,
  if windowInnerWidth is >1024, it receives collapsed 1.1.
  1.1. is the initial state(reset)
   */
  componentWillUnmount(){

  }
  componentWillReceiveProps(nextProps) {
    /*
     * change this line to : nextProps.collapsed ===1.1&& this.setState({show: 1.1})
     * if you want to not collapse all sub menu when navigation resize handler trigger
     * */
    nextProps.collapsed !==0&& this.setState({show: 1.1})
  }
  increment(e) {
    e.stopPropagation();
    this.setState({
      show: this.state.show ^ 1
    })
  }
  render() {
    //console.log('ListItem::render')
    var {container,display,deep,name,content}=this.props;
/**
 * If LI element is container, we set special css class 'container' and implement display logic,
 * also we add Arrow (animation) component which use font-awesome arrow
 */
    var container = container ? 'container ' + display(this.state.show) : '';
    var fontAwesome=container ? <Arrow direction={this.state.show} />:'';
    var css = container + ' item';
    return (
      <li  styleName={css} deep={deep} state={this.state.show} onClick={(e) => this.increment(e)}>
        {fontAwesome}

        <Link to={name==='Home'?'/':'/'+name}>{name}</Link>
        {content}
      </li>
    )
  }
}
ListItem.propTypes={
/* name is for Router Link component*/
name:PropTypes.string.isRequired,
/* display is a css logic for 3 states of component (not this.state, abstraction state) */
display:PropTypes.func.isRequired
}
export default CSSModules(ListItem, styles, {allowMultiple: true})
