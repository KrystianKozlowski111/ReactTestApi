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
    onCompleted: (data) => {
      setState(data);
    },
  });
  useEffect(() => {
    setState(data);
  }, [state, data]);
  useEffect(() => {
    if (data != null) {
      setState(data);
    }
  }, [data]);
  const [deleteColor] = useMutation(DELETE_COLOR, {
    onCompleted: (response) => {
      data.getColors.forEach((element, index, array) => {
        if (element.id === response.deleteColor.id) {
          array.splice(index, 1);

          setState(data.getColors);
        }
      });
    },
  });

  const [updateColor] = useMutation(UPDATE_COLOR, {
    onCompleted: (response) => {
      if (data && data.getColors && data.getColors.length > 0) {
        data.getColors.map((item) => {
          if (item.id === response.updateColor.id) {
            item.title = response.updateColor.title;
            item.text = response.updateColor.text;
          }
        });
        setState(data.getColors);
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
