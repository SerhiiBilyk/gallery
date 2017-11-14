import React from 'react';
import HomePage from './HomePage.jsx';

import {shallow, mount} from 'enzyme';

import renderer from 'react-test-renderer';

import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('<HomePage/> button', () => {
  it('onclick', () => {
    const wrapper = mount(
      <Router><HomePage/></Router>
    );
    expect(wrapper.find('#btn').hasClass('none')).toEqual(true)
    wrapper.find('#btn').simulate('click')
      expect(wrapper.find('#btn').hasClass('test')).toEqual(true)
  });
});
