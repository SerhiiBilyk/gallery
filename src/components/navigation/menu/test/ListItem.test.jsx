import React from 'react';

import ListItem from '../ListItem.jsx';
import MenuItems from '../MenuItems.jsx';
import Navigation from '../../Navigation.jsx';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
describe('<ListItem/>', () => {
  it(' onclick', () => {
    const wrapper = mount(
      <Router>
        <Navigation></Navigation>
      </Router>
    );
    expect(wrapper.find('.container').last().hasClass('show')).toEqual(false)
    wrapper.find('.container').last().simulate('click')
    expect(wrapper.find('.container').last().hasClass('show')).toEqual(true)

  });
});
