import React from 'react';
import Navigation from '../navigation.jsx';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';



/**SNAPSHOT*/
it('<Navigation/> snapshot', () => {
  const tree = renderer.create(
    <Router><Navigation/></Router>
  ).toJSON();
  var y;
  expect(tree).toMatchSnapshot();
});
