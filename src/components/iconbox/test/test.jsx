import React from 'react';
import Icon from '../Icon.jsx';
import  {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';


/*
TODO
why some tests dont include next 3 lines of code and work correctly
and some tests include this lines because works wrong
*/



/**SNAPSHOT*/
it('renders correctly', () => {
  const tree = renderer.create(
   <Icon icon='heart' theme='black' size='big'/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
