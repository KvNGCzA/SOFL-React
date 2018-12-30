import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../../../../src/components/common/Footer/footer';


test('Footer snapshot test', () => {
  const component = shallow(<Footer />);
  expect(component).toMatchSnapshot();
});
