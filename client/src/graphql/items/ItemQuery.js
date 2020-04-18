import { gql } from 'apollo-boost';

export const GET_ITEMS = gql`
  {
    getItems {
      id
      name
      img
      color
      price
      itemLeft
      quantity
      collectionId {
        id
        name
        url
      }
    }
  }
`;
