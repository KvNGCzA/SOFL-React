import React from 'react';
import { shallow } from 'enzyme';
import PostQuestion from '../../../../src/components/PostQuestion/PostQuestion';


test('PostQuestion snapshot test', () => {
  const firstComponent = shallow(<PostQuestion />);
  expect(firstComponent).toMatchSnapshot();
});
