import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
/**
 * TODO
 *  -- var offsetTop -- write recursive funtion for this ugly line!
 *  -- to many JS event listeners, performance issues
 */

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      start: false
    }
    this.handlePageYOffset = this.handlePageYOffset.bind(this);
  }
  componentDidMount() {
    console.log('timer did mount')
    window.addEventListener('scroll', this.handlePageYOffset, true)
  }
  componentWillUnmount() {
    console.log('timer unmount')
    window.removeEventListener('scroll', this.handlePageYOffset, true);
  }
  handlePageYOffset() {
    /**
     * @param  {[DOM node]} element                        [description]
     * @param  {[string]} id                               [description]
     * @param  {[DOM node]} [parent=element.parentElement] [description]
     * @return {[Integer]}                                 [description]
     */
    var findParentId = (element, id, parent = element.parentElement) => parent.id === id
      ? parent.parentElement.offsetTop
      : findParentId(parent, id);

    //var offsetTop = this.timerElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.offsetTop;
    var offsetTop = findParentId(this.timerElement, this.props.container);
    /**
 * if timer appears in visible zone
 * set START flag to true
 * and invoke callback setInterval 'timer'
 * each time when setInterval invokes this.step function, it check timer value
 * if timer value greate then 1000, it will stop
 */
    //if ((window.pageYOffset - this.timerElement.offsetTop) > (window.innerHeight * -1)) {
    if (window.pageYOffset + window.innerHeight / 2 >= offsetTop) {
      this.setState({
        start: true
      }, () => this.timerID = setInterval(() => this.step(), 0))
      window.removeEventListener('scroll', this.handlePageYOffset, true);
    }
  }
  componentWillUnmount() {
    console.log('timer unmount')
    window.removeEventListener('scroll', this.handlePageYOffset, true);
    clearInterval(this.timerID)
  }
  step() {
    this.setState((prevState) => {
      return {
        timer: prevState.timer + this.props.step
      }
    })
    /*if timer value > max value = stop timer*/
    if (this.state.timer >= this.props.max) {
      clearInterval(this.timerID)
    }
  }
  render() {
    //  window.removeEventListener('scroll', this.handlePageYOffset,true);
    return (
      <span ref={timerElement => this.timerElement = timerElement}>
        {this.state.timer}
      </span>
    )
  }
}
Timer.propTypes = {
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  container: PropTypes.string.isRequired
}
export default Timer;
