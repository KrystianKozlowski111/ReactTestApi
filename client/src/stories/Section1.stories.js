import { storiesOf } from '@storybook/react';
import React from 'react';

import Section1 from '../components/section1';
import Button from '../components/section1/Section1Button.js';
storiesOf('Section1', module)
  .add('Section1', () => <Section1 />)
  .add('Button', () => <Button />);
