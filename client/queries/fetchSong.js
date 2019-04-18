import gql from 'graphql-tag';

export defaut gql`
  query SongQuery($id: ID!) {
    song(id:$id) {
      id
      title
    }
  }
`;
