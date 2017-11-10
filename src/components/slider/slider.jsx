import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../navigation/navigation.jsx';
import styles from './slider.scss';
import CSSModules from 'react-css-modules';
import css from  '../global/cssmodules.js';
import {imageGenerator} from '../global/imageGenerator.js';

var context = require.context('./img', false, /[0-9]+(.jpg)$/);
var images = imageGenerator(context, 3);

var content = [
  {
    id: 1,
    text: ''
  }, {
    id: 2,
    text: ''
  }, {
    id: 3,
    text: ''
  }
]
/**
 * [Button description]
 * @param {function} changeSlide parent method, switches the slides
 * @param {boolean} focused button pressed, active
 * @param {integer} slide slide number
 */

export class Button extends React.PureComponent{
  constructor(props){
    super(props);
  }
  clickHandler(slide){
    this.props.changeSlide(slide)
  }
  render(){
    var {changeSlide, slide, focused} = this.props;
    var focus = focused
      ? 'focus'
      : '';
    return (
      <span className={styles['control--cell']}>
        <button disabled={!!focus} className={css(styles.button,styles[`${focus}`])} onClick={(e) =>{this.clickHandler(slide);}}></button>
      </span>
    )
  }
}


/**
 * [Slide description]
 * @param  {boolean} active true if slide is active
 * @param {integer} previous prev slide
 */
function Slide(props) {
  var {active, previous} = props;
  var fadeOut = previous ? 'fadeOut':'';
  console.log('images',images)
  return (
    <li className={[
      styles.slide,
      styles[(active?'show': '')],
      styles[fadeOut],
      styles['x-'+(props.index + 1/*because SASS loop start from 1*/)]
    ].join(' ')}>
    <img data-lazy className={[
      styles['img']
    ].join(' ')} src={images[props.index]}/>
      <p>{props.content}</p>
    </li>
  )
}
/**
 * [slides description]
 * @param  {integer} active active slide
 * @param {integer} previous prev slide
 */
class Slides extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    var {content, current, previous} = this.props;
    var slides = content.map((elem, index) => {
      var active = index === current
        ? true
        : false;
      var prev = index === previous
        ? true
        : false;
      return <Slide key={index} index={index} content={content[index].text} previous={prev} active={active}/>
    })

    return (
      <ul className={styles.slider}>
        {slides}
      </ul>
    )
  }

}

export class Slider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
    this.changeSlide = this.changeSlide.bind(this);
    this.current = this.state.current;
  }
  changeSlide(slideID) {
    this.setState({
      prev: this.state.current,
      current: slideID
    })
  }
  render() {
    var buttons = content.map((elem, index) => {
      var focused = this.state.current === index
        ? true
        : false;
      return <Button key={index} changeSlide={this.changeSlide} slide={index} focused={focused}/>
    })

    return (
      <div className={styles.wrapper}>
        <Navigation/>
        <Slides content={content} current={this.state.current} previous={this.state.prev}/>
        <div className={styles.control}>
         {buttons}
       </div>
      </div>
    )
  }
}
export default CSSModules(Slider,styles,{allowMultiple: true})
