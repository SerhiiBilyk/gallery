import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './progress.scss';


class Progress extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName='progress'>
        {this.props.loading.show &&
            <progress max="100" value={this.props.loading.progress}></progress>
        }
      </div>
    )
  }
}

export default CSSModules(Progress, styles, {allowMultiple: true})
