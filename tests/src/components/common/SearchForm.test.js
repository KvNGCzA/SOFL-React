import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from '../../../../src/components/common/SearchForm';


test('SearchForm snapshot test', () => {
  const firstComponent = shallow(<SearchForm mobile />);
  const secondComponent = shallow(<SearchForm mobile={false} />);
  expect(firstComponent).toMatchSnapshot();
  expect(secondComponent).toMatchSnapshot();
  secondComponent.instance().handleSubmit({ target: { search: { value: 'chris' } }, preventDefault: jest.fn() });
});
