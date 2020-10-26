import React from 'react';
import { storiesOf } from '@storybook/react';
import Flex from '../components/Flex';

storiesOf('Flex', module).add('with test value', () => (
  <Flex
    state={
      ({
        id: '1',
        title: 'Blue1',
        text: 'Niebieski kolor cos',
        img:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoA…ojtAT3RF6ojtCT3QnKOW/d6aLBAcXQbQAAAAASUVORK5CYII=',
        __typename: 'Color',
      },
      {
        id: '2',
        title: 'Green2',
        text: 'Zielony kolor cos',
        img:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoA…dk+EfOibDP3Q0YLrp/hfyaQnIvD7augAAAABJRU5ErkJggg==',
        __typename: 'Color',
      })
    }
  />
));
