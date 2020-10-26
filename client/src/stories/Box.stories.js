import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../components/Box';
import image from '../assets/images/1.png';
storiesOf('Box', module).add('with test value', () => (
  <Box
    title="Title"
    text="TextTextTextTextTextTextText TextTextTextTextTextTextTextText TextTextTextText TextTextTextTextTextText"
    img={image}
  />
));
