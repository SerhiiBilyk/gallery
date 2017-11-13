import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './list.scss';
import Img from './img/img.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps,nextState){
    return true;
  }


  render() {

    var toRender=this.props.images.length > 0 ? this.props.images.map((elem, index) => {

        return (
          <li styleName='cell' key={index}>
            <Img src={elem.url} rect={this.props.rect} iterator={index}/>
            <p>Name:{elem.file.name}</p>
            <p>Size:{elem.file.size}</p>


          </li>
        )
      }):null;

    return (
      <div styleName='list'>
        <ul>
          {toRender}
        </ul>
      </div>
    )
  }
}

export default CSSModules(List, styles, {allowMultiple: true})
