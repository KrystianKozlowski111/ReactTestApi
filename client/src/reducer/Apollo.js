import React, { Component } from 'react';
import styled from 'styled-components';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
let id = 1;
const getColorsById = gql`
  {
    getColorsById(id: ${id}) {
      id
      title
      text
    }
  }
`;
const Text = styled.h1`
  color: Black;
  text-align: center;
  font-size: 60px;
  font-family: Perpetua, sans-serif;
`;
const Text2 = styled.p`
  color: Black;
  text-align: center;
  font-size: 20px;
  font-family: Perpetua, sans-serif;
`;
export default class Apollo extends Component {
  render() {
    return (
      <Query query={getColorsById}>
        {({ loading, error, data }) => {
          if (loading) return <div>loading</div>;
          if (error) return <div>error</div>;

          const colors = data.getColorsById;

          return (
            <div>
              <Text>{colors.title}</Text>
              <br />
              <Text2>{colors.text}</Text2>
            </div>
          );
        }}
      </Query>
    );
  }
}
