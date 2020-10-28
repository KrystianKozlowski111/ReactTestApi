import React from 'react';
import { storiesOf } from '@storybook/react';
import Loading from '../components/Loading';

storiesOf('Loading', module).add('with test value', () => (
  <Loading loading={true} />
));
