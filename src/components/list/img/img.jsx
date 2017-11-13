import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './img.scss';

class Img extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      rect:null
    }
  }
  shouldComponentUpdate(nextProps,nextState){
    return true;
  }

  imgLoaded(e){
    this.setState({
      rect:{
        height:e.currentTarget.naturalHeight,
        width:e.currentTarget.naturalWidth
      }
    },this.showState)
  }
  showState(){
    console.log('show state')
    this.props.rect(this.state.rect,this.props.iterator)

  }
  render() {
    return (
      <div styleName='img'>
          <img
            ref={img=>this.img=img}
            styleName='img'
            src={this.props.src}
            onLoad={e=>this.imgLoaded(e)}
          />
          <p>IMG width{this.state.size && this.state.size.width}</p>
          <p> img height{this.state.size && this.state.size.height}</p>
      </div>
    )
  }
}

export default CSSModules(Img, styles, {allowMultiple: true})
