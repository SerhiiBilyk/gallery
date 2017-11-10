import React from 'react';
import Navigation from '../../navigation.jsx';
import Hamburger from '../hamburger.jsx';
import {shallow, mount} from 'enzyme';

import renderer from 'react-test-renderer';

import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';



/**SNAPSHOT*/
it('<Navigation/> snapshot', () => {
  const tree = renderer.create(
    <Router><Navigation/></Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('<Hamburger/>', () => {
  it('onclick', () => {
    const wrapper = mount(
      <Router><Navigation/></Router>
    );
    expect(wrapper.find('#hamburger').hasClass('expanded')).toEqual(false)
    wrapper.find('#hamburger').simulate('click')
    expect(wrapper.find('#hamburger').hasClass('expanded')).toEqual(true)
  });
});
