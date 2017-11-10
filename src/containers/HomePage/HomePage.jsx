import React from 'react';
import ReactDOM from 'react-dom';




import CSSModules from 'react-css-modules';
import Results from '../../components/results/results.jsx';
import Iconbox from '../../components/iconbox/iconbox.jsx';
import Diagram from '../../components/diagram/diagram.jsx'
import Themes from '../../components/themes/themes.jsx';
import WeAre from '../../components/weare/weare.jsx';
import SkewSection from '../../components/global/SkewSection/SkewSection.jsx';
import Skew from '../../components/global/Skew/skew.jsx';
import Testimonial from '../../components/testimonial/testimonial.jsx';
import Gallery from '../../components/gallery/gallery.jsx';
import Blog from '../../components/blog/blog.jsx';
import Contact from '../../components/contact/contact.jsx';
import Separator from '../../components/separator/separator.jsx';
import GoogleMap from '../../components/contact/GoogleMap/GoogleMap.jsx';
import Partners from '../../components/partners/partners.jsx';
import Footer from '../../components/footer/footer.jsx';
import Lazy from './lazy/lazy.jsx';
import Copyright from '../../components/footer/copyright.jsx';




var separators = [
  {
    theme: 'white',
    title: 'We Love What We Do',
    sub: 'Do what it takes to make it right! Work we have done.'
  }, {
    theme: 'white',
    title: 'From Our Blog',
    sub: 'Offering feature rich, professional product.'
  }, {
    theme: 'white',
    title: 'Got A Question? We’re Here To Help!',
    sub: 'We care about our clients and can make their life easier.'
  }
]



export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='lazy'>


        <SkewSection>
          <Iconbox/>
          <Themes/>
        </SkewSection>


<Lazy>
        <SkewSection>
          <Results/>
        </SkewSection>

        <SkewSection>
          <Diagram/>
        </SkewSection>
        <SkewSection>
          <WeAre/>
        </SkewSection>
        <SkewSection>
          <Testimonial/>
        </SkewSection>
        <Separator config={separators[0]} id={1}/>
        <SkewSection>
          <Gallery/>
        </SkewSection>
        <Separator config={separators[1]} id={2}/>
        <SkewSection>
          <Blog/>
        </SkewSection>
        <Separator config={separators[2]} id={3}/>
        <SkewSection zIndex={10}>
          <Contact/>
        </SkewSection>
        <SkewSection >

          <GoogleMap/>

        </SkewSection>
        <SkewSection >
          <Partners/>
        </SkewSection>
        <SkewSection>
          <Footer extended title='Subscribe for Our Newsletter!'/>
        </SkewSection>
</Lazy>
        <Copyright/>
      </div>
    )
  }
}
