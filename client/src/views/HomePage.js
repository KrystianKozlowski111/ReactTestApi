import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import Section from '../components/Section';

const UPDATE_COLOR = gql`
  mutation updateColor($id: ID!, $title: String!, $text: String!) {
    updateColor(id: $id, title: $title, text: $text) {
      id
      title
      text
    }
  }
`;
const GET_COLORS = gql`
  query getColors {
    getColors {
      id
      title
      text
      img
    }
  }
`;

const DELETE_COLOR = gql`
  mutation deleteColor($id: ID!) {
    deleteColor(id: $id) {
      id
    }
  }
`;
function HomePage() {
  const [state, setState] = useState([]);

  const { loading, data } = useQuery(GET_COLORS, {
    onCompleted: (response) => {
      const { getColor } = response;
      setState(response);
    },
  });

  const [deleteColor] = useMutation(DELETE_COLOR, {
    onCompleted: (response) => {
      const { deleteColor } = response;
      if (state && state.getColors && state.getColors.length > 0) {
        const array = state.getColors.filter(
          (item) => item.id !== deleteColor.id
        );
        setState({ getColors: array });
      }
    },
  });
  const [updateColor] = useMutation(UPDATE_COLOR, {
    onCompleted: (response) => {
      if (state && state.getColors && state.getColors.length > 0) {
        const array = state.getColors.map((item) => {
          if (item.id === response.updateColor.id)
            return {
              ...item,
              title: response.updateColor.title,
              text: response.updateColor.text,
            };
          else return item;
        });
        setState({ getColors: array });
      }
    },
  });
  return (
    <>
      <Section
        updateColor={updateColor}
        loading={loading}
        state={state}
        deleteColor={deleteColor}
      />
    </>
  );
}
export default HomePage;
