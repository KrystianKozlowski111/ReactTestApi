import React, { Component } from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const getColors = gql`
  {
    getColors {
      title
      text
    }
  }
`;

export default class Apollo extends Component {
  render() {
    return (
      <Query query={getColors}>
        {({ loading, error, data }) => {
          if (loading) return <div>Ładuje dane...</div>;
          if (error) return <div>Wystąpił błąd</div>;

          const colors = data.getColors;

          return (
            <div className="Apollo">
              <h1>GraphQL response:</h1>
              <div className="container">
                <p className="container__item">
                  <span>
                    <b>title:</b>
                  </span>
                  <span>
                    <b>text:</b>
                  </span>
                </p>
                {colors.map((color) => (
                  <p className="container__item" key={color.id}>
                    <span
                      dangerouslySetInnerHTML={{ __html: color.title }}
                    ></span>
                    <span
                      dangerouslySetInnerHTML={{ __html: color.text }}
                    ></span>
                  </p>
                ))}
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}
