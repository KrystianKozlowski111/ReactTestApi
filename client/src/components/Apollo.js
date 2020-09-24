import React from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
const GET_COLORS_BY_ID = gql`
  query getColorsById($id: ID!) {
    getColorsById(id: $id) {
      title
      text
    }
  }
`;
const Text = styled.h1`
  color: Black;
  text-align: center;
  font-size: 40px;
  font-family: Perpetua, sans-serif;
`;
const Text2 = styled.p`
  color: Black;
  text-align: center;
  font-size: 20px;
  font-family: Perpetua, sans-serif;
`;
function GetColor({ id }) {
  const { loading, error, data } = useQuery(GET_COLORS_BY_ID, {
    variables: { id },
  });
  if (loading) return null;
  if (error) return `Error! ${error}`;
  console.log(data);
  console.log(data.getColorsById.title);
  return (
    <div>
      <Text>{data.getColorsById.title}</Text>
      <br />
      <Text2>{data.getColorsById.text}</Text2>
    </div>
  );
}
export default GetColor;
