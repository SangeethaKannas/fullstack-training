const { gql } = require("apollo-server");


// TODO write correct schema

const typeDefs = gql`
   scalar StringToJson

    enum STATUS {
        PENDING
        PAID
        IN_PROGESS
        IN_DELIVERY
        DELIVERED
    }

    type Order {
        id: ID!
        deliveryAddress: String!
        items: StringToJson
        total: Float!
        discountCode: String!
        comment: String
        status: STATUS!
    }

    type Query {
        orders(status: STATUS): [Order]
        order(id: ID!): Order
    }

    type Mutation {
        updateStatus(id: ID!, status: STATUS!): Order
    }
`;

module.exports = typeDefs;
