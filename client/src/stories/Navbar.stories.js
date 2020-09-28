import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import Navbar from '../components/navbar';

storiesOf('common', module)
  .addDecorator((getStory) => <MemoryRouter>{getStory()}</MemoryRouter>)
  .add('Navbar', () => <Navbar />);
