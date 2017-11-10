import React from 'react';
import Slider, {Button} from '../slider.jsx';
import  {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';



/**SNAPSHOT*/
it('renders correctly', () => {
  const tree = renderer.create(
    <Router><Slider/></Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('<Slider />', () => {
  it('<Slider/> snapshot', () => {
    const wrapper =shallow(<Router><Slider/></Router>);
   expect(wrapper).toMatchSnapshot();
  });
  it('<Button/> onclick', () => {
    const wrapper = mount(
      <Router><Slider/></Router>
    );
    expect(wrapper.find('button').last().props().disabled).toEqual(false)
    wrapper.find('button').last().simulate('click')
    expect(wrapper.find('button').last().props().disabled).toEqual(true)
  });

  it('<Button /> ', () => {
    const wrapper = shallow(<Button focused={false}/>)
    //console.log(wrapper.props())
    //wrapper.find('button').simulate('click')
    expect(wrapper.find('button').hasClass('focus')).toEqual(false)
  })
});
