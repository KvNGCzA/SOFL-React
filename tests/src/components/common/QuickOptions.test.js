import React from 'react';
import { shallow } from 'enzyme';
import QuickOptions from '../../../../src/components/common/quickOptions';


test('QuickOptions snapshot test', () => {
  const component = shallow(<QuickOptions />);
  expect(component).toMatchSnapshot();
});
