import React from 'react';
import { shallow } from 'enzyme';

import ProfileCard from '../../../../src/components/common/ProfileCard';
import profile from '../../../../__mocks__/mockProfile';

describe('ProfileCard components snapshot test', () => {
  const firstComponent = shallow(<ProfileCard profile={profile} />);
  test('Signup snapshot test', () => {
    expect(firstComponent).toMatchSnapshot();
  });
});
