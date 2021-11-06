const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Team {
        _id: ID
        name: String
    }

    type Ticket {
        _id: ID
        name: String
        image: String
        quantity: Int 
        price: Float 
        team: Team
    }

    type Order {
        _id: ID 
        purchaseDate: String
        tickets: [Ticket]
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String 
        orders: [Order]
    }

    type Checkout {
        session: ID
    }

    Type Auth {
        token: ID
        user: User
    }

    type Query {
        teams: [Team]
        tickets(team: ID, name: String): [Ticket]
        ticket(_id: ID!): Ticket
        user: User
        order:(_id: ID!): Order
        checkout(tickets: [ID]!): Checkout

    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addOrder(tickets: [ID]!): Order
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        updateTicket(_id: ID!, quantity: Int!); Ticket
        login(email: String!, password: String!): Auth
    }
`;
 
module.exports = typeDefs;