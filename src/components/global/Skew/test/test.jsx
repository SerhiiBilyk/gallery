import React from 'react';
import Skew from '../skew.jsx';
import  {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

// TODO write more tests, it is created only for folder architecture

/**SNAPSHOT*/
it('<Skew/> renders correctly', () => {
  const tree = renderer.create(
   <Skew />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
