import React from 'react';
import  {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Title from '../Title.jsx';

// TODO write more tests, it is created only for folder architecture

/**SNAPSHOT*/
it('<Title/> renders correctly dark theme ', () => {
  const tree = renderer.create(
   <Title theme='dark' title='Random'/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
