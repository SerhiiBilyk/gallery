import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './separator.scss';
import SkewSection from '../../components/global/SkewSection/SkewSection.jsx';
import Skew from '../../components/global/Skew/skew.jsx';
import Title from '../../components/global/Title/title.jsx';
import Wrapper from '../../components/global/Wrapper/wrapper.jsx';



class Separator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <SkewSection>
          <div styleName={`wrapper item-${this.props.id}`}>
            <Wrapper>
              <Title {...this.props.config}/>
            </Wrapper>
            {this.props.children}
          </div>
        </SkewSection>
      </div>
    )
  }
}
export default CSSModules(Separator, styles, {allowMultiple: true})
