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
        console.log('reader loadend')
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
        }, this.showState);
      }
      reader.readAsDataURL(elem);

    });
  }
  showState() {
    console.log('sorted !!!')
    this.setState(prevState => {
      id : prevState.id++
    })

  }

  searchImg(e) {
    e.persist();
    setTimeout(() => {
      var value = e.target.value;
      var regexp = new RegExp(value + '.', 'gi');
      var start = performance.now();
      var filtered = this.state.images.filter(elem => elem.file.name.match(regexp));
      var end = performance.now();

      this.setState({filtered: filtered, search: true})
      console.log('state', this.state)
    }, 0)
  }
  handleSelect(e) {
      e.persist();
          setTimeout(() => {
    var sortBy = e.target.value;

    var sorted = this.state.images;
    //  sorted.sort((a, b) => a.file[sortBy] - b.file[sortBy])

    sorted.sort(  function compare(a, b) {
        if (a.file[sortBy]  < b.file[sortBy] ) {
          return -1;
        }
        if (a.file[sortBy]  > b.file[sortBy] ) {
          return 1;
        }
        // a должно быть равным b
        return 0;
      })
    this.setState({
      images: sorted
    }, this.showState)
  },0)

  }

  render() {
    return (
      <div styleName='input'>
        <div styleName='dropbox' ref={dropbox => this.dropbox = dropbox} onDragEnter={this.dragenter} onDragOver={this.dragover} onDrop={this.drop}></div>
        <input type="file" id="files" name="files[]" multiple onChange={this.fileHandler}/>
        <select onChange={e => this.handleSelect(e)}>
          <option value="name">name</option>
          <option value="size">size</option>
          <option value="width">width</option>
          <option value="height">height</option>
        </select>

        <input type='text' onChange={e => this.searchImg(e)}/>
        <List images={this.state.search
          ? this.state.filtered
          : this.state.images} filter={this.state.filtered}/>
      </div>
    )
  }
}

export default CSSModules(FileInput, styles)
