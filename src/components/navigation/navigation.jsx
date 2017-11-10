import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './navigation.scss';
import img from './img/logo.png';
import MenuItems from './menu/menuItems.jsx';
import Hamburger from './hamburger/hamburger.jsx';
import Logo from './logo/logo.jsx';
import Wrapper from '../global/Wrapper/wrapper.jsx';
/**
 * Pay attention at PureComponent
 * every time we click controls in Slider component we trigger re-render Slider and component
 * because  Navigation component does not change 'onClick' Slider event, Navigation don't need to re-render
 */

class Navigation extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      /*initial state*/
      collapsed: 1.1,
      stick:false,
      pc:true,
      mobile:true
    }
    this.changeState = this.changeState.bind(this);
    this.handleResize = this.handleResize.bind(this)
    this.handlePageYOffset=this.handlePageYOffset.bind(this);
  }
  /**
   * TODO
   *very expensive listeners, they must be cheaper
   */
  componentDidMount() {

    window.addEventListener('resize', this.handleResize,{passive:true})
    window.addEventListener('scroll', this.handlePageYOffset,{passive:true})
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
   window.removeEventListener('scroll', this.handlePageYOffset,true)

  }
  componentWillMount(){
    this.handleResize()
  }
  /*
    toggling between 3 states:
    1.1 - initial
    0- expanded
    1 -collapsed
     */
  changeState(e) {
    this.setState({
      collapsed: this.state.collapsed ^ 1
    },this.bodyModify)
  }
  /**
   * TODO
   * fix this in future, bad practice
   */
  bodyModify(){
    document.documentElement.style.overflow=!this.state.collapsed ?'hidden' :'auto';
  }
  /**
   * [display description]
   * This function implements CSS logic for changeState function
   * @param  {number} show -> this.state.collapsed
   * @return {string} css class
   */
  display(show){
    return show > 1 ? '': !show ? 'show': 'hide';
  }
  handlePageYOffset(){

    window.pageYOffset > 70 ? this.setState({stick: true}):this.setState({stick: false});
    window.removeEventListener('scroll', this.handlePageYOffset,true)
  }
  handleResize() {
    /*Reset css classes in mobilemenu*/
    if(window.innerWidth > 1024){
      /* reset state */
      this.setState({collapsed: 1.1,pc:true,mobile:false})
      document.documentElement.style.overflow='auto';
    }else{
      this.setState({pc:false,mobile:true})
    }

  }
  render() {
    return (
      <div styleName={'navigation '+(this.state.stick ? 'stick':'')}>
        <Wrapper>
          <Logo img={img}/>
          <div styleName='bar'>
            {this.state.pc && <MenuItems theme='pc' display={this.display} />}
            <Hamburger change={this.changeState} collapsed={this.state.collapsed}/>
          </div>
        </Wrapper>
        <div styleName={`scrollbar ${this.state.collapsed==0?'scroll':'hidden'}`}>
           {this.state.mobile && <MenuItems theme='mobile' collapsed={this.state.collapsed} display={this.display}/>}
        </div>
      </div>
    )
  }
}
export default CSSModules(Navigation,styles,{allowMultiple:true});
