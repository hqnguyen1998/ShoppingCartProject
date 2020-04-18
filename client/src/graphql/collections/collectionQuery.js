import { gql } from 'apollo-boost';

export const GET_ID_COLLECTION = gql`
  query getWomenCollection($id: ID) {
    getCollectionById(id: $id) {
      id
      name
      url
      posts {
        id
        name
        img
        color
        itemLeft
        price
        quantity
      }
    }
  }
`;
