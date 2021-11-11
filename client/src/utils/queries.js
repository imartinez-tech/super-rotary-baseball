import { gql } from '@apollo/client';

export const QUERY_TICKETS = gql`
  query getTickets($team: ID) {
    tickets(team: $team) {
      _id
      name
      description
      price
      quantity
      image
      ticket {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($tickets: [ID]!) {
    checkout(tickets: $tickets) {
      session
    }
  }
`;

export const QUERY_ALL_TICKETS = gql`
  {
    tickets {
      _id
      name
      description
      price
      quantity
      team {
        name
      }
    }
  }
`;

export const QUERY_TEAMS = gql`
  {
    teams {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        tickets {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
