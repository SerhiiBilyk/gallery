import React from 'react';
import ReactDOM from 'react-dom';
import styles from './hover.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Link from '../../global/Link/Link.jsx';



class Hover extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(typeof this.props.image)
    return (
      <div styleName={`cell `}>
        <img data-lazy styleName='img' src={this.props.image} />
        {
          (this.props.top && !this.props.link) &&
          <div styleName='top'>
            <span  className={`fa fa-${this.props.top} fa-2x`}></span>
          </div>
        }
        {
          this.props.link &&
          <div styleName='top'>
            <Link to={this.props.link}>
              <span  className={`fa fa-${this.props.top} fa-2x`}></span>
            </Link>
          </div>
        }
        <div styleName='mask'></div>
        <div styleName='child'>
          <div styleName='icons'>
            {this.props.icons.map((elem, index) => (
              <span key={index} className={`fa fa-${elem}`}></span>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
Hover.propTypes = {
  icons: PropTypes.array.isRequired,
  image:PropTypes.string.isRequired
}
export default CSSModules(Hover, styles, {allowMultiple: true})
/*
  <div styleName={`cell item-${this.props.index + 1}`}>
 */
