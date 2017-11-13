import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './img.scss';

class Img extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      rect:null
    }
  }
  lightBox(){
    this.setState(prevState=>{
      return{
        active:!prevState.active
      }
    })
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
    this.props.rect(this.state.rect,this.props.iterator)

  }
  render() {
    console.log('IMG render',this.props.iterator)
    return (
      <div styleName={`img `} onClick={e=>this.lightBox()}>
          <img
            ref={img=>this.img=img}
            styleName='img'
            src={this.props.src}
            onLoad={e=>this.imgLoaded(e)}
          />
      </div>
    )
  }
}

export default CSSModules(Img, styles, {allowMultiple: true})
