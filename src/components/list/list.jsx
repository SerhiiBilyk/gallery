import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './list.scss';
class List extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps,nextState){

    return true;
  }
  render() {
    var images = (function(initial,filtered){
      var images=null
      if(filtered.length > 0){
        return filtered
      }else if(initial.length > 0){
        return initial
      }else{
        return null
      }
    })(this.props.images,this.props.filtered)
    var toRender=images ? images.map((elem, index) => {
        return (
          <li styleName='cell' key={index}>
            <img styleName='img' src={elem.url}/>
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
