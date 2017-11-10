import React from 'react';
import Button from '../Button.jsx';
import  {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

// TODO write more tests, it is created only for folder architecture

/**SNAPSHOT*/
it('<Button/> renders correctly', () => {
  const tree = renderer.create(
   <Button theme='filled' text='hello' />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
