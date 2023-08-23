const db = require("./db");
const resolvers = require("./resolvers");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

// TODO set up resolvers and type definitions

const setupServer = async () => {
    await db.initialize();

    const server = new ApolloServer({
        resolvers,
        typeDefs,
        dataSources: () => ({
            db,
        }),
    });

    return server;
};

module.exports = setupServer;
