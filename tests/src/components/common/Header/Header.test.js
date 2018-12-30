import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../../../src/components/common/Header/header';


test('NotFound snapshot test', () => {
  const component = shallow(<Header />);
  expect(component).toMatchSnapshot();
});
