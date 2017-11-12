import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './img.scss';

class Img extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      size:null
    }
  }

  imgLoaded(e){
    console.log('image loaded')
    this.setState({
      size:{
        height:e.currentTarget.naturalHeight,
        width:e.currentTarget.naturalWidth
      }
    },this.showState)
  }
  showState(){
    console.log('show state')
    this.props.size(this.state.size,0)

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
          <span>{this.state.size && this.state.size.width}</span>
          <span>{this.state.size && this.state.size.height}</span>
      </div>
    )
  }
}

export default CSSModules(Img, styles, {allowMultiple: true})
