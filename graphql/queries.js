import { gql } from "apollo-boost";

export const GET_ALL_TODOS = gql`
  query TodosQuery {
    allTodos {
      id
      theme
      inscription
      client
      deliveryDate
      orderedAt
    }
  }
`;
