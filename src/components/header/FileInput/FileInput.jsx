import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './fileInput.scss';
import List from '../../list/list.jsx';
import Progress from '../progress/progress.jsx';
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
      search: false,
      dropbox:false,
      loading: {
        show: false,
        progress: 0
      }

    }
    this.fileHandler = this.fileHandler.bind(this)
    this.dragenter = this.dragenter.bind(this)
    this.dragover = this.dragover.bind(this)
    this.dragLeave = this.dragLeave.bind(this)
    this.drop = this.drop.bind(this)
    this.setRect = this.setRect.bind(this)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  dragenter(e){
    this.setState({
      dropbox:true
    })
    e.stopPropagation();
    e.preventDefault();
  }

  dragover(e) {
    e.stopPropagation();
    e.preventDefault();

  }
  dragLeave(){
    this.setState({
      dropbox:false
    })
  }
  drop(e) {
    this.setState({
      dropbox:false
    })
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
      reader.onprogress = (evt) => {
        var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
        this.setState({
          loading: {
            show: true,
            progress: percentLoaded
          }
        })
      }
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
            search: false,
            loading: {
              show: false
            }
          };
        }, this.idIncrement);
      }
      reader.readAsDataURL(elem);

    });
  }
  idIncrement() {
    this.setState(prevState => {
      id : prevState.id++
    })
  }
  showState() {}

  searchImg(e) {
    e.persist();
    setTimeout(() => {
      var value = e.target.value;
      var regexp = new RegExp(value, 'gi');

      var filtered = this.state.images.filter(elem => {
        return !!elem.file.name.match(regexp)
      });

      this.setState({
        filtered: filtered,
        search: !!value
      })
    }, 0)
  }
  handleSelect(e) {

    var sortBy = e.target.value.split(' ');
    var sort = {
      'size': function(a, b) {
        return a.file[sortBy[0]] - b.file[sortBy[0]]
      },
      'name': function(a, b) {
        if (a.file[sortBy[0]] < b.file[sortBy[0]]) {
          return -1;
        }
        if (a.file[sortBy[0]] > b.file[sortBy[0]]) {
          return 1;
        }
        return 0;
      },
      'rect': function(a, b) {
        return a.rect[sortBy[1]] - b.rect[sortBy[1]]
      }
    }

    this.setState(prevState => {
      return {
        images: prevState.images.sort(sort[sortBy[0]])
      }

    }, this.showState)

  }
  setRect(rect, id) {
    var updated = [...this.state.images]
    updated[id].rect = rect;
    this.setState({
      images: updated
    }, this.showState)
  }

  render() {
    console.log('FILE-INPUT render')
    return (
      <div styleName='input'>
        <div styleName={`dropbox ${this.state.dropbox?'hover':'disabled'}`} ref={dropbox => this.dropbox = dropbox} onDragEnter={this.dragenter} onDragOver={this.dragover} onDrop={this.drop} onDragLeave={this.dragLeave}>
          <i className={`fa fa-upload fa-5x`} aria-hidden="true"></i>
        </div>
        <input type="file" id="files" name="files[]" multiple onChange={this.fileHandler}/>
        <div>
        <p styleName='sortBy'>Sort by:</p>
        <select onChange={e => this.handleSelect(e)}>
          <option value="name">name</option>
          <option value="size">size</option>
          <option value="rect width">width</option>
          <option value="rect height">height</option>
        </select>
      </div>
        <Progress loading={this.state.loading}/>
        <div styleName='search'>
          <input placeholder='Search' type='text' onChange={e => this.searchImg(e)}/>
        </div>
        <List images={this.state.search
          ? this.state.filtered
          : this.state.images} filter={this.state.filtered} rect={this.setRect}/>
      </div>
    )
  }
}

export default CSSModules(FileInput, styles, {allowMultiple: true})
