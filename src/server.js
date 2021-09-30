const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const app = express();

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
};
let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();


app.listen(4000, function () {
    console.log(`server running on port 4000`);
    console.log(`gql path is ${apolloServer.graphqlPath}`);
});