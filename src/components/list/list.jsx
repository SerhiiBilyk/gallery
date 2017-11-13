import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './list.scss';
import Img from './img/img.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log('LIST render')
    var format=function(str){
      return str.length>10?`${str.substr(0,10)}...`:str
    }

    var toRender = this.props.images.length > 0
      ? this.props.images.map((elem, index) => {

        return (
          <li styleName='cell' key={index}>
            <div styleName='content'>
              <Img src={elem.url} rect={this.props.rect} iterator={index}/>
            </div>
            <div styleName='description'>            
              <p>{format(elem.file.name)}</p>
              <p>Kb:{elem.file.size/1000}</p>
              <p>W:{elem.rect && elem.rect.width}</p>
              <p>H:{elem.rect && elem.rect.height}</p>
            </div>
          </li>
        )
      })
      : null;

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
