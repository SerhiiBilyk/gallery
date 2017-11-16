import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';




export default function Wrapper(component,styles,mapStateToProps,mapDispatchToProps){
  const CSSModule=CSSModules(component,styles,{allowMultiple:true});
  return connect(mapStateToProps,mapDispatchToProps)(CSSModule);
}
