import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './menuItems.scss';
import {bar} from '../bar.jsx';
import css from '../../global/cssmodules.js';
import Link from '../../global/Link/Link.jsx';
import ListContainer from './ListContainer.jsx';
import ListItem from './ListItem.jsx';

/**
 * TODO
 * Firefox bug:
 * in PC mode there are disabled scroll bar under navigation menu, remove it by CSS
 */
class MenuItems extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      collapsed:undefined
    }
  }

  /**
   * [foo description]
   * @param  {JSON} arg JSON navigation content
   * @param  {Number} [deep=0] nesting level of UL element   *
   * if deep==0 it is mean that it is first UL element,
   * and react will show him[styles.items]
   * other sub-UL element will be hidden [styles.sub]*
   *
    */

  menuGenerator(arg, deep = -1) {
    deep = deep + 1;
    var {collapsed,display,theme} = this.props;
    var config={collapsed,display,deep};
    /*
     * if deep > 0, set css class 'sub', in other case set theme of items and collapse logic
     */
    var containerCSS = deep ? 'sub': `items ${theme} ${display(collapsed)}`;
    return (
      <ListContainer deep={deep} css={containerCSS} collapsed={collapsed}>
        {arg.map((elem, index) =>
        /*if element contains 'sub' property, recursion goes deeper and each time increment deep indicator*/
        elem.sub
          ? <ListItem
            key={index}
            content={this.menuGenerator(elem.sub, deep)}
            name={elem.name}
            {...config}
            container/>
          /*if no react just return LI element*/
          : <ListItem key={index} name={elem.name} display={display}/>)}
      </ListContainer>
    )
  }
  render() {
    return this.menuGenerator(bar)
  }
}
MenuItems.propTypes={
theme:PropTypes.oneOf(['pc','mobile'])
}
export default CSSModules(MenuItems, styles, {allowMultiple: true});
