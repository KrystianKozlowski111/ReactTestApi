import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Text, Text2 } from './GetColorStyles.js';
const GET_COLORS_BY_ID = gql`
  query getColorsById($id: ID!) {
    getColorsById(id: $id) {
      title
      text
    }
  }
`;

function GetColor({ id }) {
  const { loading, error, data } = useQuery(GET_COLORS_BY_ID, {
    variables: { id },
  });
  if (loading) return null;
  if (error) return `Error! ${error}`;
  console.log(data);
  console.log(data.getColorsById.title);
  let title = data.getColorsById.title;
  let text = data.getColorsById.text;
  return (
    <>
      <Text>{title}</Text>

      <Text2>{text}</Text2>
    </>
  );
}
export default GetColor;
