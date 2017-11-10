import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './diagram.scss';
import Title from '../global/Title/title.jsx';
import Wrapper from '../global/Wrapper/wrapper.jsx';

const percentage = [66, 82, 41];
/*
TODO
write scroll logic, because css animation should start when user scroll to circle diagrams
 */
var TitleConfig = {
  title: 'Why Us? We Care About Our Clients and Make Their Life Easier!',
  sub: 'We listen, we discuss, we advise and develop. We are flexible, transparent and customer-focused.'
}
var CircleDiagramsConfig = [
  {
    name: 'WordPress',
    percentage: 66,
    text: 'Nulla consectetur ornare nibh, a auctor mauris scelerisque eu proin nec urna quis.'
  }, {
    name: 'HTML5',
    percentage: 82,
    text: 'Nulla consectetur ornare nibh, a auctor mauris scelerisque eu proin nec urna quis.'
  }, {
    name: 'CSS3',
    percentage: 41,
    text: 'Nulla consectetur ornare nibh, a auctor mauris scelerisque eu proin nec urna quis.'
  }
]

class Diagram extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      animation: ['item','item','item']
    }
        this.handlePageYOffset = this.handlePageYOffset.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handlePageYOffset,  true)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlePageYOffset,true);
  }
  handlePageYOffset(){
     if (window.pageYOffset + window.innerHeight / 2 >= this.circles.parentElement.offsetTop) {
        this.setState({
          animation: ['item-1','item-2','item-3']
        })
        window.removeEventListener('scroll', this.handlePageYOffset,true);
    }
  }
  render() {
    var circles = CircleDiagramsConfig.map((elem, index)=> {
      return (
        <div key={index} styleName='circle'>
          <div styleName='container' per={`${elem.percentage}%`}>
            <div styleName={`pie ${this.state.animation[index]}`}></div>
          </div>
          <div>
            <p styleName='name'>{elem.name}</p>
            <p styleName='text'>{elem.text}</p>
          </div>
        </div>
      )
    })
    return (
      <div id='circles'>
        <Wrapper>
          <div styleName='diagram' ref={circles => this.circles = circles}>
            <Title theme='dark' {...TitleConfig}/> {circles}
          </div>
        </Wrapper>
      </div>
    )
  }
}

export default CSSModules(Diagram, styles, {allowMultiple: true});
