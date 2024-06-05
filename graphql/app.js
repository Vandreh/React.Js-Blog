const Koa = require('koa')
const { ApolloServer } = require('apollo-server-koa')
const { makeExecutableSchema } = require('graphql-tools')
const { resolvers, typeDefs } = require('./schemas')
const PORT = 4000

async function run() {
    const app = new Koa()
    const server = new ApolloServer({ schema: makeExecutableSchema({typeDefs, resolvers})})
    await server.start();
    server.applyMiddleware({app})
    app.listen({ port: PORT }, () => {
        console.log(` Server ready at http://localhost:${PORT + server.graphqlPath}`)
    })
}
run();
