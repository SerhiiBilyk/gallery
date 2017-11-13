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
      filtered: [],
      id: 0,
      search: false

    }
    this.fileHandler = this.fileHandler.bind(this)
    this.dragenter = this.dragenter.bind(this)
    this.dragover = this.dragover.bind(this)
    this.drop = this.drop.bind(this)
    this.setRect=this.setRect.bind(this)
  }
  shouldComponentUpdate(nextProps,nextState){
    return true;
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
                url: reader.result,
                id: prevState.id
              }
            ],
            filtered: [],
            search: false
          };
        }, this.idIncrement);
      }
      reader.readAsDataURL(elem);

    });
  }
  idIncrement(){
    this.setState(prevState => {
      id : prevState.id++
    })
  }
  showState() {
    console.log('FINAL STATE',this.state.images)
  }

  searchImg(e) {
    e.persist();
    setTimeout(() => {
      var value = e.target.value;
      var regexp = new RegExp(value , 'gi');

      var filtered = this.state.images.filter(elem =>{
        console.log(elem.file.name,regexp, elem.file.name.match(regexp))
        return  !!elem.file.name.match(regexp)
       }
       );


      this.setState({filtered: filtered, search: !!value})
      console.log('state', this.state)
    }, 0)
  }
  handleSelect(e) {

      var sortBy = e.target.value.split(' ');
      console.log('sortBy',sortBy)
      var sorted = this.state.images;
      var sort = {
        'size': function(a, b) {
          console.log('size sort')
          return a.file[sortBy[0]] - b.file[sortBy[0]]
        },
        'name': function(a, b) {
          console.log('name sort')
          if (a.file[sortBy[0]] < b.file[sortBy[0]]) {
            return -1;
          }
          if (a.file[sortBy[0]] > b.file[sortBy[0]]) {
            return 1;
          }
          return 0;
        },
        'rect':function(a, b) {
          console.log('width sort',sortBy[1])
          return a.rect[sortBy[1]] - b.rect[sortBy[1]]
        }
      }

      sorted.sort(sort[sortBy[0]])
      console.log('sorted',sorted)
      this.setState({
        images: sorted
      }, this.showState)


  }
  setRect(rect,id){
    var updated=[...this.state.images]
    updated[id].rect=rect;
    this.setState({
      images:updated
    },this.showState)
  }

  render() {
    return (
      <div styleName='input'>
        <div styleName='dropbox' ref={dropbox => this.dropbox = dropbox} onDragEnter={this.dragenter} onDragOver={this.dragover} onDrop={this.drop}></div>
        <input type="file" id="files" name="files[]" multiple onChange={this.fileHandler}/>
        <select onChange={e => this.handleSelect(e)}>
          <option value="name">name</option>
          <option value="size">size</option>
          <option value="rect width">width</option>
          <option value="rect height">height</option>
        </select>

        <input type='text' onChange={e => this.searchImg(e)}/>
        <List images={this.state.search
          ? this.state.filtered
          : this.state.images} filter={this.state.filtered} rect={this.setRect}/>
      </div>
    )
  }
}

export default CSSModules(FileInput, styles)
