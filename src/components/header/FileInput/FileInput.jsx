import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './fileInput.scss';
import List from '../../list/list.jsx';
/*
sorted by size does not work
*/
class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      show:[]
    }
    this.fileHandler = this.fileHandler.bind(this)
    this.dragenter = this.dragenter.bind(this)
    this.dragover = this.dragover.bind(this)
    this.drop = this.drop.bind(this)
  }


  dragenter(e) {

    e.stopPropagation();
    e.preventDefault();
  }

  dragover(e) {
    e.stopPropagation();
    e.preventDefault();
  }
  drop(e) {
    e.preventDefault();

    var dt = e.dataTransfer;
    var files = dt.files;
    this.fileHandler([...files], 'droped');
  }

  fileHandler(e, droped) {

    var images = ((event, droped) => droped
      ? event
      : [...event.target.files])(e, droped)

    images.forEach((elem, index) => {

      var reader = new FileReader();
      reader.onloadend = () => {
        this.setState((prevState) => {
          return {
            images: [
              ...prevState.images, {
                file: elem,
                url: reader.result
              }
            ],
            show:[]
          };
        }, this.showState);
      }
      reader.readAsDataURL(elem);
    });
  }
  showState() {
    console.log('showSTate',this.state)
  }
  toSort() {
    /*
    https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
    */
    var sorted = this.state.images;
    sorted.sort(function(a, b) {
      return a.file.size - b.file.size
    })

    this.setState({
      images: sorted
    }, this.showState)

  }
  searchImg(e){
    var value=e.target.value;

    var regexp=new RegExp(value+'.','gi');
    console.log(regexp)
    var search=[...this.state.images];
    var filtered=search.filter(elem=>{
      console.log(elem)
      if(elem.file.name.match(regexp)){
              return  true
      }
    })
    console.log('after find',filtered,'state',this.state.images)
    this.setState({
        show:filtered
    },this.showState)




  }

  render() {

    return (
      <div styleName='input'>
        <div styleName='dropbox' ref={dropbox => this.dropbox = dropbox} onDragEnter={this.dragenter} onDragOver={this.dragover} onDrop={this.drop}></div>
        <input type="file" id="files" name="files[]" multiple onChange={this.fileHandler}/>
        <button onClick={e => this.toSort()}>sort</button>
        <input type='text' onChange={e=>this.searchImg(e)} />
        <List images={this.state.images} filtered={this.state.show}/>

      </div>
    )
  }
}

export default CSSModules(FileInput, styles)
