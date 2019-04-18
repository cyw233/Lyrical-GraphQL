import gql from 'graphql-tag';
import React from 'react';

export defaut gql`
  query SongQuery($id: ID!) {
    song(id:$id) {
      id
      title
    }
  }
`;
