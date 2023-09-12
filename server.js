const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose');
const typeDefs = require('./graphQl/typeDefs')
const resolvers = require('./graphQl/resolvers')

const MONGO_URL = 'MONGO_URL/graphQl'

const server = new ApolloServer({
    resolvers,
    typeDefs
})

mongoose.connect(MONGO_URL, {useNewUrlParser:true}).then(() => {
    console.log('MongoDB Connected');
    return server.listen({port:5000})
}).then(response => {
    console.log(`GraphQl Server running at ${response.url}`);
})