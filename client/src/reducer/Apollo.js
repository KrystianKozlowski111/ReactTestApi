import React, { Component } from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
let tek = 2;
const getColorsById = gql`
  {
    getColorsById(id: ${tek}) {
      id
      title
      text
    }
  }
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
              {colors.title}
              <br />
              {colors.text}
            </div>
          );
        }}
      </Query>
    );
  }
}
