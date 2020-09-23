import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_COLORS_BY_ID = gql`
  query getColorsById($id: Int!) {
    color(id: $id) {
      title
      text
    }
  }
`;
function getColor({ id }) {
  const { loading, error, data } = useQuery(GET_COLORS_BY_ID, {
    variables: { id },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return <title src={data.Color.title} />;
}
export default getColor;
/*
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
}*/
