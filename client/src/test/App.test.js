import React from 'react';
import { shallow } from 'enzyme';
import Section from '../views/HomePage.js';

it('renders Section without crashing', () => {
  shallow(<Section />);
});
it('includes Title', () => {
  const section = shallow(<Section />);
  expect(section.containsMatchingElement(<Flex />)).toEqual(true);
});
